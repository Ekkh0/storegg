import { IProduct } from '../../interface/IProduct';
import {ActionType} from '../action-types/index';

interface DepositAction{
    type: ActionType.DEPOSIT
    payload: number
}

interface WithdrawAction{
    type: ActionType.WITHDRAW
    payload: number
}

interface add{
    type: ActionType.ADD
    payload: IProduct
}

interface remove{
    type: ActionType.REMOVE
    payload: number
}

export type Action = DepositAction | WithdrawAction | add | remove