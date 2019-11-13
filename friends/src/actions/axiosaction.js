import axios from "axios";
import { axiosWithAuth } from "../components/axiosWithAuth";

export const LOGIN = "LOGIN";
export const USER_DATA = "USER_DATA";

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
