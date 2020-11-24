import React from 'react';
import Layout from './components/Layout';
import './assets/styles/main.css'

import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ProjectShowcase from './pages/ProjectShowcase';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/showcase" component={ProjectShowcase} />
        <Route exact path="/login" component={Login} />

      </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
