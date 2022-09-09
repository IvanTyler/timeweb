import { type } from "os";
import { Dispatch } from "redux"
import { data } from "../../data/mock"
import { getDataActionType, getDataActionTypesEnum } from "../types/getDataTypes"


export const getDataFetch = () => {
    return (dispath: Dispatch<getDataActionType>) => {
        try {
            dispath({
                type: getDataActionTypesEnum.GET_DATA,
                payload: data,
            })
        } catch (e) {
            dispath({
                type: getDataActionTypesEnum.GET_DATA_ERROR,
                payload: 'Данных нет',
            })
        }
    }
}