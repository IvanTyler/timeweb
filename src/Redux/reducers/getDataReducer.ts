import { GetDataAction } from "../action/dataAction";
import { GetData, initState } from "../initState";
import { GET_DATA_TYPE } from "../types/getDataTypes";

export const getDataReducer = (state = initState, action: GetDataAction): GetData => {
    switch (action.type) {
        case GET_DATA_TYPE:
            return { data: action.payload }
        default:
            return state
    }
}