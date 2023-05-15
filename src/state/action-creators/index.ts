import { ActionType } from "../action-types"
import { Dispatch } from 'redux'
import { Action } from "../actions/index"
import { IProduct } from "../../interface/IProduct"

export const sellProduct = (amount: number) =>{
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DEPOSIT,
            payload: amount
        })
    }
}

export const buyProduct = (amount: number) =>{
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.WITHDRAW,
            payload: amount
        })
    }
}

export const addProduct = (product: IProduct) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD,
            payload: product
        })
    }
}

export const removeProduct = (num: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.REMOVE,
            payload: num
        })
    }
}