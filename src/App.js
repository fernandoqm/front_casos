import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Layout
import LayoutAdmin from "./components/layouts/layoutAdmin";

//Seguridad
import Login from './pages/Segurity/Login';
import Home from './pages/Admin/Home';

//Error
import Error404 from "./pages/Error404";


export default class App extends Component {
  static displayName = App.name;
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<LayoutAdmin />} >
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
