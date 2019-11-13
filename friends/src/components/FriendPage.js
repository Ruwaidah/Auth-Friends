import React from "react";
import { connect } from "react-redux";
import { deletefriend } from "../actions/axiosaction";
function FriendPage(props) {
  const friend = props.data.filter(item => item.id == props.match.params.id);

  console.log(props);
  const onSubmit = () => {
    props.deletefriend(friend[0].id, friend);
    props.history.push("/");
  };

  return (
    <div className="friend-page">
      {" "}
      <h1>{friend[0].name}</h1>
      <div className="friend-info">
        <h5>Age:</h5>
        <p>{friend[0].age}</p>
      </div>
      <div className="friend-info">
        <h5>Email:</h5>
        <p>{friend[0].email}</p>
      </div>
      <button>Edite</button>
      <button onClick={onSubmit}>Delete</button>
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, { deletefriend })(FriendPage);
