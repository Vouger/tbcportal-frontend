import React from "react";
import {Link} from "react-router-dom";

import HeaderLogo from 'assets/header-logo.png';

import styles from "./Logo.module.scss";

export default function Logo(props) {
    return (
        <Link to="/" className={styles.root}>
            <img alt={props.title || "Vanilla LFG"} src={HeaderLogo}/>
        </Link>
    )
}