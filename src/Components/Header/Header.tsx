import React from "react";
import { useDispatch } from "react-redux";
import { useGetData } from "../../hooks/useGetData";
import { getDataFetch } from "../../Redux/action/dataAction";

export const Header: React.FC = () => {
    const { navigation } = useGetData()
    console.log(navigation);
    return (
        <div>header</div>
    )
}