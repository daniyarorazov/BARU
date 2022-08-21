import React, {useState} from 'react';
import styles from "../styles/SliderCardItemComponent.module.css";
import ClockIcon from "../images/icons/clock.svg";
import HeartIcon from "../images/icons/heart.svg"
import HeartActiveIcon from "../images/icons/heart-active.svg"

function SliderCardItemComponent(props) {

    const [heartStatus, setHeartStatus] = useState(false);

    return (
        <div className={styles["card__block"]}>
            {/* <a href={props.linkEvent}><img className={styles["card__img"]} src={props.imgSrc} alt="" /></a> */}
            <a href={props.linkEvent}>
                <div className={styles["card__img"]} style={{backgroundImage: `url(${props.imgSrc})`}} alt="">
                    <a href="javascript://0"><img src={heartStatus ? HeartActiveIcon : HeartIcon} alt="" onClick={e => setHeartStatus(!heartStatus)} /></a>
                </div>
            </a>
            <a href={props.linkEvent} className={styles["card__title"]}>{props.title}</a>
            <div>
                <img className={styles["date__icon"]} src={ClockIcon} alt="" />
                <span className={styles["card__date"]}>{props.dateOfEvent}</span>
            </div>
        </div>
    );
}

export default SliderCardItemComponent;