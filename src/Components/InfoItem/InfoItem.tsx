import React from "react";
import { IInfo } from "../../Interfaces/interface";
import "./InfoItem.scss";

interface InfoItemProps {
    info: IInfo,
}

export const InfoItem: React.FC<InfoItemProps> = ({ info }) => {
    return (
        <li className="list-info__item">
            <div className="list-info__media">
                <img src={info.image} alt={info.title} className="list-info__image" />
            </div>
            <div className="list-info__content">
                <h3 className="list-info__title">{info.title}</h3>
                <p className="list-info__description">{info.description}</p>
            </div>
        </li>
    )
}