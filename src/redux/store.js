import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import stockChecking from "./middlewares/stockChecking";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, stockChecking))
);

export default store;
