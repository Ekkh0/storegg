import {IProduct} from '../../interface/IProduct';
import {Action} from '../actions/index'
import {ActionType} from '../action-types/index';

const userReducer=(state:IProduct[] = [], action:Action) => {
    switch(action.type){
        case ActionType.ADD:
            return [
                ...state,
                {
                    id: action.payload.id,
                    title: action.payload.title,
                    price: action.payload.price,
                    description: action.payload.description,
                    category: action.payload.category,
                    image: action.payload.image,
                    rate: action.payload.rate,
                    count: action.payload.count
                }
            ];
        case ActionType.REMOVE:
            return[
                ...state.slice(0, action.payload),
                ...state.slice(action.payload+1)
            ]
        default:
            return state;
    }
};

export default userReducer;