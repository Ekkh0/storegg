import {combineReducers} from 'redux';
import userReducer from "./userReducer"
import listMyProductReducer from "./listMyProductReducer"

const reducers = combineReducers({
    user1: userReducer,
    listMyProduct: listMyProductReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>