import React from "react";
import { useGetData } from "../../Hooks/useGetData";
import { IInfo } from "../../Interfaces/interface";
import { InfoItem } from "../InfoItem/InfoItem";
import List from "../List/List";
import "./Info.scss";

export const Info: React.FC = () => {
    const { info } = useGetData()
    
    return (
        <section className="section-info border-solid-bottom">
            <ul className="list-info">
                <List
                    items={info}
                    renderItem={(info: IInfo) => <InfoItem info={info} key={info.id} />}
                />
            </ul>
        </section>
    )
}