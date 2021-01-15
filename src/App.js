import React from "react";
import "assets/styles/main.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Navbar from "components/Navbar";
import HomePage from "pages/HomePage";
import ProjectShowcase from "pages/ProjectShowcase";
import Login from "pages/Login";
import ProjectDetails from "./components/ProjectDetails";
import AddNewProject from "./components/AddNewProject";
import ProtectedRoutes from "components/ProtectedRoutes";
import Signup from "pages/Signup";

function App() {
  return (
    <div className="bg-gray-50">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/showcase" component={ProjectShowcase} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <ProtectedRoutes
            exact
            path="/addnewproject"
            component={AddNewProject}
          />

          <Route exact path="/projectdetails">
            <ProjectDetails />
          </Route>
          <Redirect to="/" />
        </Switch>

        <footer className="p-8 bg-purple-200 bottom-0 mx-auto w-full"></footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
