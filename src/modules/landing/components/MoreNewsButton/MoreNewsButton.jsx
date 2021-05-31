import React from "react";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

import {TRoutes} from "shared/types";

import styles from "./MoreNewsButton.module.scss";

export default function MoreNewsButton() {
    return (
        <div className={styles.root}>
            <Button component={Link} to={TRoutes.NEWS} className={styles.button} color="primary">
                Остальные новости...
            </Button>
        </div>
    )
}