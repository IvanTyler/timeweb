import React from "react";
import { useTypeSelector } from "./useTypeSelector";

export const useGetData = () => {
    const {
        navigation,
        mainFrame,
        info,
        labels,
        comments
    } = useTypeSelector(state => state.data.data)

    return { navigation, mainFrame, info, labels, comments }
}