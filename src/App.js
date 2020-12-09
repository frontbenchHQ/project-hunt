import React from 'react';
import 'assets/styles/main.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from 'components/Navbar';
import HomePage from 'pages/HomePage';
import ProjectShowcase from 'pages/ProjectShowcase';
import Login from 'pages/Login';
import ProjectDetails from './components/ProjectDetails';
import AddNewProject from './components/AddNewProject';

function App() {
  return (
    <div className="bg-gray-50">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/showcase" component={ProjectShowcase} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/addnewproject" component={AddNewProject} />

        <Route exact path="/projectdetails" >
          <ProjectDetails />
        </Route>
        <footer className="p-8 bg-purple-200 bottom-0 mx-auto w-full"></footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
