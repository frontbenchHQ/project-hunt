import {
  ADD_PROJECT_FAIL,
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_RESET,
  ADD_PROJECT_SUCCESS,
  SINGLE_PROJECT_FAIL,
  SINGLE_PROJECT_REQUEST,
  SINGLE_PROJECT_RESET,
  SINGLE_PROJECT_SUCCESS,
  ALL_PROJECT_FAIL,
  ALL_PROJECT_REQUEST,
  ALL_PROJECT_RESET,
  ALL_PROJECT_SUCCESS,
  FEATURED_PROJECT_FAIL,
  FEATURED_PROJECT_REQUEST,
  FEATURED_PROJECT_RESET,
  FEATURED_PROJECT_SUCCESS,
} from "redux/actionTypes";

export const addProjectReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_PROJECT_REQUEST:
      return { loading: true };
    case ADD_PROJECT_SUCCESS:
      return { loading: false, success: true, addedProjectInfo: payload };
    case ADD_PROJECT_FAIL:
      return { loading: false, error: payload, success: false };
    case ADD_PROJECT_RESET:
      return {};
    default:
      return state;
  }
};

export const singleProjectReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SINGLE_PROJECT_REQUEST:
      return { loading: true };
    case SINGLE_PROJECT_SUCCESS:
      return { loading: false, singleProjectInfo: payload };
    case SINGLE_PROJECT_FAIL:
      return { loading: false, error: payload };
    case SINGLE_PROJECT_RESET:
      return {};
    default:
      return state;
  }
};

export const allProjectsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ALL_PROJECT_REQUEST:
      return { loading: true };
    case ALL_PROJECT_SUCCESS:
      return { loading: false, allProjectsInfo: payload };
    case ALL_PROJECT_FAIL:
      return { loading: false, error: payload };
    case ALL_PROJECT_RESET:
      return {};
    default:
      return state;
  }
};

export const featuredProjectsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case FEATURED_PROJECT_REQUEST:
      return { loading: true };
    case FEATURED_PROJECT_SUCCESS:
      return { loading: false, featuredProjectsInfo: payload };
    case FEATURED_PROJECT_FAIL:
      return { loading: false, error: payload };
    case FEATURED_PROJECT_RESET:
      return {};
    default:
      return state;
  }
};
