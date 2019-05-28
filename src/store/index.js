import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const middleware = [thunk];

// Disable redux logger on production build
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore (
    rootReducer,
    applyMiddleware(...middleware)
);

export default store;