import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "./reducers";
import config from "./config";
let middleware = window.navigator.userAgent.includes("Chrome")
  ? compose(
    applyMiddleware(thunk, reduxImmutableStateInvariant()),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  : compose(applyMiddleware(thunk, reduxImmutableStateInvariant()));

if (config().env === "production") {
  middleware = applyMiddleware(thunk);
}

const store = createStore(rootReducer, middleware);

export default store;
