export enum getDataActionTypesEnum {
    GET_DATA = 'GET_DATA',
    GET_DATA_ERROR = 'GET_DATA_ERROR'
}

export interface GetDataAction {
    type: getDataActionTypesEnum.GET_DATA;
    payload: any;
}

export interface GetDataErrorAction {
    type: getDataActionTypesEnum.GET_DATA_ERROR;
    payload: any;
}

export type getDataActionType = GetDataAction | GetDataErrorAction