import { combineReducers } from "redux";
import uiRedcuer from "./ui";

export default combineReducers({
  ui: uiRedcuer
});
