import { IGetData, initState } from "../initState";
import { GetDataAction, getDataActionTypesEnum } from "../types/getDataTypes";

export const getDataReducer = (state = initState, action: GetDataAction): IGetData => {
    switch (action.type) {
        case getDataActionTypesEnum.GET_DATA:
            return { data: action.payload }
        default:
            return state
    }
}