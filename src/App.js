import React, { Component } from 'react';
import Nav2 from './components/Nav2';
import News from './components/News';
import {Routes,Route, Router} from "react-router-dom";

export class App extends Component {
  render() {
    return(
     
      <div>
      <Nav2/>
      <Routes>
      <Route path="/"  element={<News  country="in"  pageSize={20} category="general"  />}   />
      <Route path="/Health"  element={<News  country="in"  pageSize={20} category="Health"  />}     />
      <Route path="/Business"  element={<News  country="in"  pageSize={20} category="Business"  />}     />
      <Route path="/Technology"  element={<News  country="in"  pageSize={20} category="Technology"  />}     />
      <Route path="/Sports"  element={<News  country="in"  pageSize={20} category="Sports"  />}     />
      <Route path="/Entertainment"  element={<News  country="in"  pageSize={20} category="Entertainment"  />}     />
      <Route path="/Science"  element={<News  country="in"  pageSize={20} category="Science"  />}     />
       </Routes>      
      </div>
     
    )
  };
    
}


export default App;
