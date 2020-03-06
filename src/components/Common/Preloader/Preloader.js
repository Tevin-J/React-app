import style from "./Preloader.module.css";
import preloader from "../../../assets/images/preloader.svg";
import React from "react";


let Preloader = (props) => {
    return (
        <div className={style.preloader}>
            <img src={preloader} />
        </div>
    )
}
export default Preloader