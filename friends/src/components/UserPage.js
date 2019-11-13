import React, { useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { userData } from "../actions/axiosaction";

function UserPage(props) {
  console.log(props);
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
          <Link
            key={item.id}
            className="friend"
            to={`/protected/friends/${item.id}`}
          >
            <h1>{item.name}</h1>
            <div className="friend-info">
              <h5>Age:</h5>
              <p>{item.age}</p>
            </div>
            <div className="friend-info">
              <h5>Email:</h5>
              <p>{item.email}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default connect(state => state, { userData })(UserPage);
