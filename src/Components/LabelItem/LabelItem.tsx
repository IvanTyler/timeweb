import React from "react";

import { ILabels } from "../../Interfaces/interface";
import "./LabelItem.scss";

interface LabelItemProps {
    label: ILabels,
}

export const LabelItem: React.FC<LabelItemProps> = ({ label }) => {
    return (
        <li className="list-label__item">
            <h3 className="list-label__title">{label.title}</h3>
            <p className="list-label__description">{label.subtitle}</p>
        </li>
    )
}