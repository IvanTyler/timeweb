import React from "react";
import { IComments } from "../../interfaces/interface.fetchData";
import './Comments.scss'
import {
    star,
    user
} from '../../assets/importsImags/importImgs'

interface CommentsProps {
    item: IComments,
}

export const Comments: React.FC<CommentsProps> = ({ item }) => {

    return (
        <section className="section-comments">
            <ul className="rating-list">
                <li className="rating-list__item">
                    <img src={star} alt="star" />
                </li>
                <li className="rating-list__item">
                    <img src={star} alt="star" />
                </li>
                <li className="rating-list__item">
                    <img src={star} alt="star" />
                </li>
                <li className="rating-list__item">
                    <img src={star} alt="star" />
                </li>
            </ul>
            <p className="section-comments__comment">
                {item.text}
            </p>
            <div className="user">
                <div className="user__border-image-user">
                    <img src={user} alt={item.user.name} className="user__avatar" />
                </div>
                <div className="user__name">{item.user.name}</div>
                <div className="user__profession">{item.user.profession}</div>
            </div>
        </section>
    )
}