import React from "react";
import {Paper, Typography} from "@material-ui/core";

import styles from "./NotificationMessage.module.scss";

export default function NotificationMessage(props) {
    const { message } = props;

    return (
        <Paper className={styles.root}>
            <Typography variant="h5" gutterBottom>
                {message}
            </Typography>
        </Paper>
    )
}