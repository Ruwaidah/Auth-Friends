import axios from "axios";
import { axiosWithAuth } from "../components/axiosWithAuth";

export const LOGIN = "LOGIN";
export const USER_DATA = "USER_DATA";
export const ADD_NEW_FRIEND = "ADD_NEW_FRIEND";
export const DELETE_FRIEND = "DELETE_FRIEND";

export const axiosaction = values => dispatch => {
  axios
    .post("http://localhost:5000/api/login", values)
    .then(respo => dispatch({ type: LOGIN, payload: respo.data.payload }));
};

export const userData = () => dispatch => {
  const authAxios = axiosWithAuth();
  authAxios
    .get("http://localhost:5000/api/friends")
    .then(respo => dispatch({ type: USER_DATA, payload: respo.data }));
};

export const addNewFriend = values => dispatch => {
  console.log(values);
  const authAxios = axiosWithAuth();
  authAxios
    .post("http://localhost:5000/api/friends", values)
    .then(respo => dispatch({ type: ADD_NEW_FRIEND, payload: respo.data }));
};

export const deletefriend = (id, friend) => dispatch => {
  const authAxios = axiosWithAuth();
  authAxios
    .delete(`http://localhost:5000/api/friends/${id}`, friend)
    .then(respo => dispatch({ type: DELETE_FRIEND, payload: respo.data }));
};
