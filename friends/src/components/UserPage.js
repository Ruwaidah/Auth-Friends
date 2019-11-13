import React, { useEffect } from "react";
import { connect } from "react-redux";
import { userData } from "../actions/axiosaction";

function UserPage(props) {
  console.log(props.data);
  useEffect(() => {
    props.userData();
  }, []);
  console.log("dscnsok");
  return (
    <div>
      {props.data.map(item => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.age}</p>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  );
}

export default connect(state => state, { userData })(UserPage);
