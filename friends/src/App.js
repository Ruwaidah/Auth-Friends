import React, { useEffect } from "react";
import LoginForm from "./components/LoginForm";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { axiosaction, userData } from "./actions/axiosaction";
import UserPage from "./components/UserPage";
import AddFriend from "./components/AddFriend";
import FriendPage from "./components/FriendPage";

import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App(props) {
  sessionStorage.clear();
  useEffect(() => {}, [props]);

  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/protected">
          <Route exact path="/protected" component={UserPage} />
          <Route path="/protected/addfriend" component={AddFriend} />
          <Route
            path="/protected/friends/:id"
            render={props => <FriendPage {...props} />}
          />
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
