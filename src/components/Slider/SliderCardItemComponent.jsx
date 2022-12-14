import React from 'react';
import style from "./styles/SliderCardItemComponent.module.sass";
import ClockIcon from "../../images/icons/clock.svg";

const SliderCardItemComponent = (props) => {
    return (
        <div className={style["card__block"]}>
            <a href={props.linkEvent}><img className={style["card__img"]} src={props.imgSrc} alt="" /></a>
            <a href={props.linkEvent} className={style["card__title"]}>{props.title}</a>
            <div>
                <img className={style["date__icon"]} src={ClockIcon} alt="" />
                <span className={style["card__date"]}>{props.dateOfEvent}</span>
            </div>
        </div>
    );
}

export default SliderCardItemComponent;