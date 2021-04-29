import React, {useState} from "react";
import {Paper, Typography} from "@material-ui/core";

import Layout from "modules/layout/containers/Layout/Layout";
import GuideForm from "../../components/GuideForm/GuideForm";
import GuideWrapper from "modules/guides/components/GuideWrapper/GuideWrapper";
import styles from "./GuidesSubmitView.module.scss";

export default function GuidesSubmitView() {
    const [guide, setGuide] = useState({});

    return (
        <Layout maxWidth="xl">
            <Paper className={styles.paper}>
                <Typography component="h1" variant="h5" color="secondary">
                    Submit guide
                </Typography>

                <GuideForm setGuide={setGuide} />
            </Paper>

            <Typography component="h1" variant="h5" color="secondary" className={styles.preview}>
                Preview
            </Typography>

            <GuideWrapper guide={guide} />
        </Layout>
    )
}