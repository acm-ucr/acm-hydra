import React from "react";
import styles from "./Slide.module.css";

// make carousel

const Slide = props => {
    return (
        <div className={styles.aboutSingleSlide}>
            <img src={props.image} alt="prop" />
        </div>
    );
};

export default Slide;
