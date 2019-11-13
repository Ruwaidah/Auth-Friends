import { LOGIN, USER_DATA } from "../actions/axiosaction";
const initiallstate = {
  data: [],
  token: "",
  isloading: false,
  error: null,
  isLoggedIn: false
};

export const axiosReducer = (state = initiallstate, action) => {
  console.log(action);
  switch (action.type) {
    case LOGIN:
      if (action.payload) {
        sessionStorage.setItem("token", action.payload);
        console.log(sessionStorage);
        return {
          ...state,
          token: action.payload,
          isLoggedIn: true,
          isloading: false,
          error: null
        };
      }
    case USER_DATA:
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
};
