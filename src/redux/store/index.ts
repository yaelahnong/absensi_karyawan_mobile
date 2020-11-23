import { combineReducers, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import { attendanceReducer } from './attendance/reducers';

const rootReducers = combineReducers({
    attendance: attendanceReducer,
})

// const store = createStore(rootReducers, applyMiddleware(logger, promise));

// export default store;

export type RootState = ReturnType<typeof rootReducers>