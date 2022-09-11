import React from "react";
import { useGetData } from "../../hooks/useGetData";
import './Heading.scss'
import {
    arrowRight
} from '../../assets/importsImags/importImgs'

export const Heading: React.FC = () => {
    const { mainFrame } = useGetData()

    return (
        <section className="section-title border-solid-bottom">
            <h3 className="section-title__subtitle">{mainFrame.subtitle}</h3>
            <h1 className="section-title__heading">{mainFrame.heading}</h1>
            <div className="section-title__wrapper-links">
                <a href={mainFrame.button1.link} className="section-title__about-us common-btn">
                    {mainFrame.button1.title}
                    <img className="section-title__arrow-right" src={arrowRight} alt="arrowRight" />
                </a>
                <a href={mainFrame.button2.link} className="section-title__contact-us common-btn">
                    {mainFrame.button2.title}
                </a>
            </div>
        </section>
    )
}