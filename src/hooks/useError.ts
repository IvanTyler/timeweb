import { useDispatch } from "react-redux";
import { getDataFetch } from "../Redux/action/dataAction";
import { useTypeSelector } from "./useTypeSelector";

export const useError = () => {
    const dispath = useDispatch<any>()
    dispath(getDataFetch())

    const error = useTypeSelector(state => state.data.error)

    return { error }
}