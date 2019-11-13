import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { userData, axiosaction } from "../actions/axiosaction";

const isAuthenticated = () => {
  return sessionStorage.getItem("token") ? true : false;
};

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => (isAuthenticated() ? children : <Redirect to="/login" />)}
    />
  );
}

export default connect(state => state, { userData, axiosaction })(PrivateRoute);
