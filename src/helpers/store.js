import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from "redux-logger";
import thunk from 'redux-thunk';
import { loginReducer } from '../reducers/LoginPage/loginReducer';

function configureStore() {
  let middleware = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, logger]
  }

  const store = createStore(
    loginReducer,
    applyMiddleware(...middleware)
  );

  persistStore(store);

  return store;
}

export default configureStore();
