export interface IFetchData {
    navigation: INavigation[];
    mainFrame: IMainFrame;
    info: IInfo[];
    labels: ILabels[];
    comments: IComments[];
}

export interface INavigation {
    title: string;
    link: string;
}

export interface IMainFrame {
    subtitle: string;
    heading: string;
    button1: {
        title: string,
        link: string,
    },
    button2: {
        title: string,
        link: string,
    },
}

export interface IInfo {
    id: number,
    image: string;
    title: string;
    description: string;
}

export interface ILabels {
    title: string;
    subtitle: string;
}

export interface IComments {
    rating: number;
    text: string;
    user: IUser;
}

export interface IUser {
    image: string;
    name: string;
    profession: string;
}