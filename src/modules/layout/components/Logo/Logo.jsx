import React from "react";
import {Link} from "react-router-dom";
import {Avatar, Typography} from "@material-ui/core";

import styles from "./Logo.module.scss";

export default function Logo(props) {
    return (
        <Link to="/" className={styles.root}>
            <Avatar alt="TBC portal" variant="square" src="/logo.png"/>
            <Typography variant="h6" noWrap className={styles.title}>
                {props.title || "Vanilla LFG" }
            </Typography>
        </Link>
    )
}