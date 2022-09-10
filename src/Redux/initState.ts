import { IFetchData } from "../interfaces/interface.fetchData"

export interface IGetData {
    data: IFetchData,
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
}