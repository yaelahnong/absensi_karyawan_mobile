import { combineReducers, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import user from '../reducers/user.reducers';

const rootReducers = combineReducers({
    user,
})

const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;