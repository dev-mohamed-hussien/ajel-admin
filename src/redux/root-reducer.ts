import { combineReducers } from "redux";
import App from "redux/app/reducer";
import Auth from "redux/auth/reducer";
import LanguageSwitcher from "redux/languageSwitcher/reducer";
import ThemeSwitcher from "redux/themeSwitcher/reducer";
import crumbReducer from "redux/crumb/reducer";
import modal from "redux/modal/reducer";
import profile from "redux/profile/reducer";

export default combineReducers({
  Auth,
  App,
  LanguageSwitcher,
  modal,
  profile,
  crumbReducer,
  ThemeSwitcher
  
});
