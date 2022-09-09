import { Dispatch } from "redux"
import { data } from "../../data/mock"
import { GET_DATA_TYPE } from "../types/getDataTypes"

export interface GetDataAction {
    type: string;
    payload: any;
}

export const getDataFetch = () => {
    return (dispath: Dispatch<GetDataAction>) => {
        try {
            dispath({
                type: GET_DATA_TYPE,
                payload: data,
            })
        } catch (e) {

        }
    }
}