import { Dispatch } from "redux"
import { data } from "../../data/mock"
import { GetDataAction, getDataActionTypesEnum } from "../types/getDataTypes"

export const getDataFetch = () => {
    return (dispath: Dispatch<GetDataAction>) => {
        dispath({
            type: getDataActionTypesEnum.GET_DATA,
            payload: data,
        })
    }
}