import { combineReducers } from "redux";
import {
  addProjectReducer,
  allProjectsReducer,
  featuredProjectsReducer,
  singleProjectReducer,
} from "./reducers/projectReducer";
import {
  userLoginReducer,
  userRegisterReducer,
  topMakerUserReducer,
  userProfileReducer,
} from "./reducers/userReducer";

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  topMakerUser: topMakerUserReducer,
  userProfile: userProfileReducer,
  addProject: addProjectReducer,
  singleProject: singleProjectReducer,
  allProjects: allProjectsReducer,
  featuredProjects: featuredProjectsReducer,
});
export default rootReducer;
