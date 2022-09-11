import React from "react";
import { useGetData } from "../../hooks/useGetData";
import { ILabels } from "../../interfaces/interface.fetchData";
import { LabelItem } from "../LabelItem/LabelItem";
import List from "../List/List";
import './Labels.style.scss'

export const Labels: React.FC = () => {
    const { labels } = useGetData()
    return (
        <section className="section-labels border-solid-bottom">
            <ul className="list-label">
                <List
                    items={labels}
                    renderItem={(label: ILabels) => <LabelItem label={label} key={label.id} />}
                />
            </ul>
        </section>
    )
}