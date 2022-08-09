import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';



export class News extends Component {

static defaultProps={
    country:'in',
    pageSize:20,
    category:'Sports'
}

static propTypes={
    country:PropTypes.string,
    category:PropTypes.string,
    pageSize:PropTypes.number
}



    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            pageSize: 15
        }
    }
    

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9e44c0f62a1147058d459506c06a0f0a&page=1&pageSize=${this.props.pageSize}`;
        this.setState(
            {
                loading: true 
            }
        )
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })

    }

    handleNextClick = async () => {
        console.log("next");
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9e44c0f62a1147058d459506c06a0f0a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({
                loading: true
            })
            this.setState(
                {
                    loading: true
                }
            )
            let data = await fetch(url);
            let parsedData = await data.json();
            // console.log(parsedData);

            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1,
                loading: false
            })

        }
    }
    handlePrevClick = async () => {
        console.log("Prev");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9e44c0f62a1147058d459506c06a0f0a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState(
            {
                loading: true
            }
        )
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false
        })
    }


    render() {
        return (
            <div className='container my-4'>
                <h1 className='text-center'>DailyShorts-Top Headlines</h1>

                {this.state.loading && <Spinner />}
                <div className="row">

                    {!this.state.loading &&this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} />
                        </div>
                    })}
                </div>
                <div className="but d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark  " onClick={this.handlePrevClick}>	&larr; Prev</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>

                
            </div>

        )
    }
}

export default News;
