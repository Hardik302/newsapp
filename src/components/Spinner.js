import React, { Component } from 'react';
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return <div className='text-center' >
    <h3>Loading Shorts</h3>
        <img src={loading} alt="loading" />
    </div>;
  }
}

export default Spinner;
