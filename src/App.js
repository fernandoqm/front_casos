import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './components/Auth/Login';
import Main from './pages/Main/main'; 


export default class App extends Component {
  static displayName = App.name;


  render() {
    return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>

    );
  }
}
