import {IUser} from '../../interface/IUser';
import {Action} from '../actions/index'
import {ActionType} from '../action-types/index';

const defaultUser1:IUser={
    id: 1,
    name: "darma",
    coin: 1000
  }

const userReducer=(state:IUser = defaultUser1, action:Action) => {
    switch(action.type){
        case ActionType.DEPOSIT:
            return state.coin + action.payload;
        case ActionType.WITHDRAW:
            return state.coin - action.payload;
        default:
            return state;
    }
};

export default userReducer;