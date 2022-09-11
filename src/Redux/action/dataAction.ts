import { Dispatch } from "redux"
import { data } from "../../Data/mock"
import { getDataActionType, getDataActionTypesEnum } from "../types/getDataTypes"

export const getDataFetch = () => {
    return async (dispath: Dispatch<getDataActionType>) => {
        try {
            dispath({
                type: getDataActionTypesEnum.GET_DATA,
                payload: data,
            })
        } catch (e) {
            dispath({
                type: getDataActionTypesEnum.GET_DATA_ERROR,
                payload: 'Ошибка, данных нет',
            })
        }
    }
}