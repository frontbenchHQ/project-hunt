import axios from "axios";
import { BASE_URL } from "redux/actionTypes";

async function upvoteProject(projectId, token) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${BASE_URL}/api/project/upvote/${projectId}`,
      null,
      config
    );

    return { success: true, data };
  } catch (error) {
    return {
      sucess: false,
      error:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    };
  }
}

function createProject(project) {
  axios
    .post("https://projecthunt-api.herokuapp.com/project", project)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}

export { upvoteProject, createProject };
