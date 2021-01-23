import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_RESET,
  USER_REGISTER_SUCCESS,
  TOPMAKERS_USER_FAIL,
  TOPMAKERS_USER_REQUEST,
  TOPMAKERS_USER_RESET,
  TOPMAKERS_USER_SUCCESS,
  USER_PROFILE_FAIL,
  USER_PROFILE_REQUEST,
  USER_PROFILE_RESET,
  USER_PROFILE_SUCCESS,
} from "redux/actionTypes";

const userLoginState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

export const userLoginReducer = (state = userLoginState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: payload };
    case USER_LOGOUT:
      return { userInfo: null };
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, success: true, userInfo: payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: payload, success: false };
    case USER_REGISTER_RESET:
      return {};
    default:
      return state;
  }
};

export const topMakerUserReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case TOPMAKERS_USER_REQUEST:
      return { loading: true };
    case TOPMAKERS_USER_SUCCESS:
      return { loading: false, topMakerUserInfo: payload };
    case TOPMAKERS_USER_FAIL:
      return { loading: false, error: payload };
    case TOPMAKERS_USER_RESET:
      return {};
    default:
      return state;
  }
};

export const userProfileReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case USER_PROFILE_REQUEST:
      return { loading: true };
    case USER_PROFILE_SUCCESS:
      return { loading: false, userProfileInfo: payload };
    case USER_PROFILE_FAIL:
      return { loading: false, error: payload };
    case USER_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};
