import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import loadingIndicatorMiddleware from './loadingIndicator';

const middleware = [thunk, loadingIndicatorMiddleware];

// Disable redux logger on production build
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore (
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;