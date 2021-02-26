import React from "react";
import {Grid, Paper, Toolbar, Typography} from "@material-ui/core";
import ClassFilter from "../../components/ClassFilter/ClassFilter";
import GuideCard from "../../components/GuideCard/GuideCard";

import styles from './GuidesView.module.scss'

export default function GuidesView() {
    return (
        <Paper>
            <Typography component="h1" variant="h4" color="secondary" className={styles.title}>
                Guides & Strategy
            </Typography>

            <Toolbar component="nav" variant="dense">
                <ClassFilter />
            </Toolbar>

            <Grid container spacing={3} className={styles.list}>
                <Grid item lg={2} xs={12}>
                    <GuideCard />
                </Grid>
                <Grid item lg={2} xs={12}>
                    <GuideCard />
                </Grid>
                <Grid item lg={2} xs={12}>
                    <GuideCard />
                </Grid>
                <Grid item lg={2} xs={12}>
                    <GuideCard />
                </Grid>
                <Grid item lg={2} xs={12}>
                    <GuideCard />
                </Grid>
                <Grid item lg={2} xs={12}>
                    <GuideCard />
                </Grid>
            </Grid>
        </Paper>
    )
}