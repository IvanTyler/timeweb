import { useTypeSelector } from "./useTypeSelector";
import { useDispatch } from "react-redux";
import { getDataFetch } from "../Redux/action/dataAction";


export const useGetData = () => {
    const dispath = useDispatch<any>()
    dispath(getDataFetch())

    const {
        navigation,
        mainFrame,
        info,
        labels,
        comments
    } = useTypeSelector(state => state.data.data)

    return { navigation, mainFrame, info, labels, comments }
}