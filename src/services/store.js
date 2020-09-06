import { createStore ,applyMiddleware} from "redux";
import logger from 'redux-logger'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'

import rootReducer from "./reducer/index";

const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(logger,thunk))
);

