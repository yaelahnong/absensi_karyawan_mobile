import { combineReducers, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import attendance from '../reducers/attendance.reducers';

const rootReducers = combineReducers({
    attendance
})

const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
