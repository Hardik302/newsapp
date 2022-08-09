import React, { Component } from 'react';

export class NewsItem extends Component {

    render() {
      
        let { title, description, imageUrl,newsUrl,publishedAt,author } = this.props;
        return <div className='my-4' >

            <div className="card" >
                <img src={!imageUrl?"https://cdn.24.co.za/files/Cms/General/d/301/3323be7516ad44bca7329459b99ea751.jpg":imageUrl } className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl}  target="_blank"  rel="noreferrer" className="btn btn-primary btn-dark">Read More</a>
                    {/* <p>Date and Time : {publishedAt}</p> */}
                    <p class="card-text"><small class="text-muted my-3">short by {author} on {new Date(publishedAt).toGMTString()}</small></p>
                    {/* <p class="card-text"><small class="text-muted my-3 ">Last updated  on {new Date(publishedAt).toGMTString()}</small></p> */}
                    
                </div>
            </div>
            
        </div>
    }
}

export default NewsItem;
