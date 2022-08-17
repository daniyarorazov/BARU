import React from 'react';
import "../styles/SliderCardItemComponent.css";

function SliderCardItemComponent(props) {
    return (
        <div className="card_block">
            <img className="card__img" src={props.imgSrc} alt="" />
            <p className="card__title">{props.title}</p>
            <span className="card__date">{props.dateOfEvent}</span>
        </div>
    );
}

export default SliderCardItemComponent;