import { IGetData, initState } from "../initState";
import { getDataActionType, getDataActionTypesEnum } from "../types/getDataTypes";

export const getDataReducer = (state = initState, action: getDataActionType): IGetData => {
    switch (action.type) {
        case getDataActionTypesEnum.GET_DATA:
            return { ...state, data: action.payload }
        case getDataActionTypesEnum.GET_DATA_ERROR:
            return { ...state, error: action.payload }
        default:
            return state
    }
}