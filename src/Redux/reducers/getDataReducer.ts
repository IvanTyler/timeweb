import { IGetData, initState } from "../initState";
import { getDataActionType, getDataActionTypesEnum } from "../types/getDataTypes";

export const getDataReducer = (state = initState, action: getDataActionType): IGetData => {
    switch (action.type) {
        case getDataActionTypesEnum.GET_DATA:
            return { data: action.payload, error: null }
        case getDataActionTypesEnum.GET_DATA_ERROR:
            return { data: action.payload, error: action.payload }
        default:
            return state
    }
}