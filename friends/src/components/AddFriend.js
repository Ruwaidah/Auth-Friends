import React, { useState } from "react";
import { connect } from "react-redux";
import { addNewFriend } from "../actions/axiosaction";
function AddFriend(props) {
  const [values, setValues] = useState({
    name: "",
    age: "",
    email: ""
  });
  //   console.log(props);
  console.log("add new friend");
  const onChange = event =>
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  const onSubmit = event => {
    console.log("submit");
    event.preventDefault();
    props.addNewFriend(values);
    props.history.push("/");
  };
  return (
    <div className="form-div">
      <form onSubmit={onSubmit}>
        <div className="input">
          <label id="name" htmlFor="name">
            Name
          </label>
          <input placeholder="name" name="name" onChange={onChange} />
        </div>
        <div className="input">
          <label id="age" htmlFor="age">
            age
          </label>
          <input placeholder="age" name="age" onChange={onChange} />
        </div>
        <div className="input">
          <label id="email" htmlFor="email">
            Email
          </label>
          <input placeholder="email" name="email" onChange={onChange} />
        </div>
        <button>Add Friend</button>
      </form>
    </div>
  );
}

export default connect(state => state, { addNewFriend })(AddFriend);
