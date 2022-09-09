import { IFetchData } from "../interfaces/interface.fetchData"

export interface GetData {
    data: IFetchData,
}

export const initState: GetData = {
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
    }
}