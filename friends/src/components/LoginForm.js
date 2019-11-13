import React, { useState, useEffect } from "react";
import { axiosaction } from "../actions/axiosaction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function LoginForm(props) {
  console.log(props);
  const [values, setValues] = useState({
    username: "",
    password: ""
  });

  if (props.isLoggedIn) props.history.push("/protected");

  const onChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const onSubmit = event => {
    event.preventDefault();
    props.axiosaction(values);
    props.history.push("/protected");
  };

  return (
    <div className="form-div">
      <form onSubmit={onSubmit}>
        <div className="input">
          <label htmlFor="username">Username: </label>
          <input
            value={values.username}
            name="username"
            id="username"
            placeholder="username"
            onChange={onChange}
          />
        </div>
        <div className="input">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            id="pwd"
            onChange={onChange}
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}

export default connect(state => state, { axiosaction })(LoginForm);
