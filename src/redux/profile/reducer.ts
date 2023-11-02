import profileActions from "./actions";

const INITIAL_DATA = {
  data:
    (localStorage.getItem("profile") &&
      JSON.parse(localStorage.getItem("profile"))) ||
    {},
  loading: false,
  error: null,
};
export default function profileReducer(state = INITIAL_DATA, action) {
  switch (action.type) {
    case profileActions.FETCH_PROFILE_DATA_SUCCESS:
      localStorage.setItem("profile", JSON.stringify(action.payload));
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case profileActions.REMOVE_PROFILE_DATA:
      localStorage.removeItem("profile");
      return {
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
}
