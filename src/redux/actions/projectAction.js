import axios from "axios";
import {
  BASE_URL,
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAIL,
  SINGLE_PROJECT_REQUEST,
  SINGLE_PROJECT_SUCCESS,
  SINGLE_PROJECT_FAIL,
  ALL_PROJECT_REQUEST,
  ALL_PROJECT_SUCCESS,
  ALL_PROJECT_FAIL,
  FEATURED_PROJECT_REQUEST,
  FEATURED_PROJECT_SUCCESS,
  FEATURED_PROJECT_FAIL,
} from "redux/actionTypes";
export const addProject = (projectData) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_PROJECT_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${BASE_URL}/api/project/addProject`,
      projectData,
      config
    );
    dispatch({
      type: ADD_PROJECT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_PROJECT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getSingleProject = (projectId) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_PROJECT_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `${BASE_URL}/api/project/singleProject/${projectId}`,
      config
    );
    dispatch({
      type: SINGLE_PROJECT_SUCCESS,
      payload: data.project,
    });
  } catch (error) {
    dispatch({
      type: SINGLE_PROJECT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllProject = (filter) => async (dispatch) => {
  try {
    dispatch({ type: ALL_PROJECT_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let proData;
    if (filter) {
      const { data } = await axios.get(
        `${BASE_URL}/api/project/getAllProject?filter=${filter}`,
        config
      );
      proData = data;
    } else {
      const { data } = await axios.get(
        `${BASE_URL}/api/project/getAllProject`,
        config
      );
      proData = data;
    }

    dispatch({
      type: ALL_PROJECT_SUCCESS,
      payload: proData.projects,
    });
  } catch (error) {
    dispatch({
      type: ALL_PROJECT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getFeaturedProject = () => async (dispatch) => {
  try {
    dispatch({ type: FEATURED_PROJECT_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      `${BASE_URL}/api/project/getAllProject?filter=featured`,
      config
    );

    dispatch({
      type: FEATURED_PROJECT_SUCCESS,
      payload: data.projects,
    });
  } catch (error) {
    dispatch({
      type: FEATURED_PROJECT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
