import { compose, createStore } from 'redux';
import reducer from './reducers';
import middleware from './middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducer, /* preloadedState, */ composeEnhancers(
  middleware,
));
