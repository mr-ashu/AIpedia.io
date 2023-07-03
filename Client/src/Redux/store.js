import { spaceReducer, userLogin, filterReducer, googleLogin  } from "./reducer";

import {
    combineReducers,
    legacy_createStore,
    applyMiddleware,
    compose,
  } from "redux";
  import thunk from "redux-thunk";

const rootReducer = combineReducers({
      userReducer:userLogin,
      spaceReducer: spaceReducer,
      filterReducer : filterReducer,
      googleLogin:googleLogin,
      
  });
  
  const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  export const store = legacy_createStore(
    rootReducer,
    createComposer(applyMiddleware(thunk))
  );


export default store;