import { IFetchData } from "../Interfaces/interface"

export interface IGetData {
    data: IFetchData,
    error: null | string
}

export const initState: IGetData = {
    data: {
        navigation: [],
        mainFrame: {
            subtitle: '',
            heading: '',
            button1: {
                title: '',
                link: '',
            },
            button2: {
                title: '',
                link: '',
            },
        },
        info: [],
        labels: [],
        comments: [],
    },
    error: null,
}