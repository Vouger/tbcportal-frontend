import React from "react";
import { Link } from "react-router-dom";
import {Button, Grid, Typography} from "@material-ui/core";

import styles from "./GuidesHeaderView.module.scss";
import {TRoutes} from "../../../../shared/types";

export default function GuidesHeaderView(props) {
    const { title } = props;

    return (
        <Grid container spacing={3} className={styles.root}>
            <Grid item lg={2} xs={12}>
                <Typography component="h1" variant="h4" color="secondary">
                    {title}
                </Typography>
            </Grid>
            <Grid item lg={9} xs={12}>
            </Grid>
            <Grid item lg={1} xs={12} className={styles.button}>
                <Button component={Link} to={TRoutes.GUIDES_SUBMIT} fullWidth variant="contained" color="primary">
                    Submit
                </Button>
            </Grid>
        </Grid>
    )
}