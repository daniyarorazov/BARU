import React from 'react';
import "../styles/SliderCardItemComponent.css";
import ClockIcon from "../images/icons/clock.svg";

function SliderCardItemComponent(props) {
    return (
        <div className="card_block">
            <img className="card__img" src={props.imgSrc} alt="" />
            <p className="card__title">{props.title}</p>
            <div>
                <img className="date__icon" src={ClockIcon} alt="" />
                <span className="card__date">{props.dateOfEvent}</span>
            </div>
        </div>
    );
}

export default SliderCardItemComponent;