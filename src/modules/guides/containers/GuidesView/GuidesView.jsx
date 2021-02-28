import React, {useState} from "react";
import { Grid, Paper, Toolbar, Typography } from "@material-ui/core";
import ClassFilter from "../../components/ClassFilter/ClassFilter";
import GuideCard from "../../components/GuideCard/GuideCard";

import styles from './GuidesView.module.scss'
import {useQuery} from "@apollo/client";
import {Queries} from "../../../../shared/queries";

export default function GuidesView() {
    const [filterClass, setFilterClass] = useState('all');

    const { loading, data } = useQuery(Queries.GET_GUIDES, {
        variables: { filterClass }
    });

    return (
        <Paper>
            <Typography component="h1" variant="h4" color="secondary" className={styles.title}>
                Guides & Strategy
            </Typography>

            <Toolbar component="nav" variant="dense" classes={{root: styles.filterContainer}}>
                <Grid container spacing={3}>
                    <Grid item lg={4} xs={12} className={styles.classFilter}>
                        <ClassFilter filterClass={filterClass} setFilterClass={setFilterClass} />
                    </Grid>
                </Grid>
            </Toolbar>

            <Grid container spacing={3} className={styles.list}>
                {!loading && data && data.guides.map((item) => (
                    <Grid item xl={2} lg={3} sm={6} md={6} xs={12}>
                        <GuideCard guide={item} />
                    </Grid>
                ))}
            </Grid>
        </Paper>
    )
}