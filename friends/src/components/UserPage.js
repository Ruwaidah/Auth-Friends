import React, { useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { userData } from "../actions/axiosaction";

function UserPage(props) {
  useEffect(() => {
    props.userData();
  }, []);
  console.log("dscnsok");
  return (
    <div className="user-page">
      <h1 className="header">Client-Side Authentication</h1>
      <Link to="/protected/addfriend">add new friend</Link>
      <div className="friend-list">
        {props.data.map(item => (
          <div key={item.id} className="friend">
            <h1>{item.name}</h1>
            <div className="friend-info">
              <h5>Age:</h5>
              <p>{item.age}</p>
            </div>
            <div className="friend-info">
              <h5>Email:</h5>
              <p>{item.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default connect(state => state, { userData })(UserPage);
