import {
  LOGIN,
  USER_DATA,
  ADD_NEW_FRIEND,
  DELETE_FRIEND
} from "../actions/axiosaction";
const initiallstate = {
  data: [],
  token: "",
  isloading: false,
  error: null,
  isLoggedIn: false
};

export const axiosReducer = (state = initiallstate, action) => {
  switch (action.type) {
    case LOGIN:
      if (action.payload) {
        sessionStorage.setItem("token", action.payload);
        return {
          ...state,
          token: action.payload,
          isLoggedIn: true,
          isloading: false,
          error: null
        };
      } else return { ...state };
    case USER_DATA:
      return {
        ...state,
        data: action.payload,
        isloading: false,
        error: null,
        isLoggedIn: true
      };
    case ADD_NEW_FRIEND:
      return {
        ...state,
        data: action.payload,
        isloading: false,
        error: null,
        isLoggedIn: true
      };
    case DELETE_FRIEND:
      return {
        ...state,
        data: action.payload,
        isloading: false,
        error: null,
        isLoggedIn: true
      };

    default:
      return state;
  }
};
