import { createStore, applyMiddleware } from 'redux'
import reducers from "./reducers/index"
import {IUser} from '../interface/IUser';
import thunk from "redux-thunk"

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)