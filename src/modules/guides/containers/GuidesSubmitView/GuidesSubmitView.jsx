import React, {useEffect, useState} from "react";
import {Grid, Paper, Typography} from "@material-ui/core";

import Layout from "modules/layout/containers/Layout/Layout";
import GuideForm from "../../components/GuideForm/GuideForm";
import GuideWrapper from "modules/guides/components/GuideWrapper/GuideWrapper";
import styles from "./GuidesSubmitView.module.scss";

export default function GuidesSubmitView() {
    const [guide, setGuide] = useState({});

    useEffect(() => {
        window.$WowheadPower.refreshLinks();
    }, [guide])

    return (
        <Layout maxWidth="xl">
            <Paper className={styles.paper}>
                <Typography component="h1" variant="h5" color="secondary">
                    Submit guide
                </Typography>

                <GuideForm setGuide={setGuide} />
            </Paper>


            <Grid container spacing={6}>
                <Grid item lg={9} xs={12}>
                    <Typography component="h1" variant="h5" color="secondary" className={styles.preview}>
                        Preview
                    </Typography>
                    <GuideWrapper guide={guide} />
                </Grid>
            </Grid>
        </Layout>
    )
}