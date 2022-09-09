import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { getDataFetch } from "../../Redux/action/dataAction";

export const Header: React.FC = () => {
    const { navigation } = useTypeSelector(state => state.data.data)
    console.log(navigation);
    const dispath = useDispatch<any>()
        dispath(getDataFetch())
    return (
        <div>header</div>
    )
}