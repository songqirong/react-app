import {createStore,combineReducers,applyMiddleware} from 'redux';
import goodReducer from './reducers/goodReducer';
import todoReducer from './reducers/todoReducer';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';
const reducer = combineReducers({
    good:goodReducer,
    todo:todoReducer,
    user:userReducer
})
const store = createStore(reducer,applyMiddleware(thunk))
export default store;
