export enum getDataActionTypesEnum {
    GET_DATA = 'GET_DATA',
}

export interface GetDataAction {
    type: getDataActionTypesEnum.GET_DATA;
    payload: any;
}