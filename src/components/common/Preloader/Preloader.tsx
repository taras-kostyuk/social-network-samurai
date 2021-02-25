import preloader from "../../../assets/image/loading.gif";
import styles from "../../users/users.module.css";
import React from "react";

export let Preloader = () => {
    return <img src={preloader} className={styles.preloader}/>
}