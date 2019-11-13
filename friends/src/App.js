import React, { useEffect } from "react";
import logo from "./logo.svg";
import LoginForm from "./components/LoginForm";
import { Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { axiosaction, userData } from "./actions/axiosaction";
import axios from "axios";
import UserPage from "./components/UserPage";

import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App(props) {
  // sessionStorage.clear();
  useEffect(() => {}, [props]);
  console.log(props);

  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/protected">
          <Route path="/protected" component={UserPage} />
        </PrivateRoute>
        <Route path="/" render={props => <LoginForm {...props} />} />
      </Switch>
    </div>
  );
}

export default connect(state => state, {
  axiosaction,
  userData,
  sessionStorage
})(App);
