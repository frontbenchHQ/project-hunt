import React from 'react';
import 'assets/styles/main.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from 'components/Navbar';
import HomePage from 'pages/HomePage';
import ProjectShowcase from 'pages/ProjectShowcase';
import Login from 'pages/Login';

function App() {
  return (
    <div className="bg-gray-50">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/showcase" component={ProjectShowcase} />
        <Route exact path="/login" component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
