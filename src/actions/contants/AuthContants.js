import keymirror from "keymirror";

const TYPES = keymirror({
  IS_PROCESSING: null,
  USER_AUTH_SUCCESS: null,
  USER_AUTH_FAILURE: null,
  RESET_AUTH_ERROR: null,
  USER_LOGOUT: null,
  IS_LOGGING_OUT: null,
});

export default TYPES;
