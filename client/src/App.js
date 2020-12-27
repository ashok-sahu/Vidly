import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Customers from "./components/Movies/Customers";
import Movies from "./components/Movies/Movies";
import NotFound from "./components/Movies/NotFound";
import Rentals from "./components/Movies/Rentals";
import NavBar from "./components/Navbar";

import RegisterForm from './components/registerForm'
import LoginForm from './components/loginForm'
import MovieForm from './components/movieForm'

import "react-toastify/dist/ReactToastify.css";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect exact from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
