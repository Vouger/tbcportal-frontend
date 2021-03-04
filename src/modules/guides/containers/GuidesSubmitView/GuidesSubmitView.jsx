import React from "react";
import {Paper, Typography} from "@material-ui/core";

import Layout from "../../../UI/containers/Layout/Layout";
import GuideForm from "../../components/GuideForm/GuideForm";
import styles from "./GuidesSubmitView.module.scss";

export default function GuidesSubmitView() {
    return (
        <Layout maxWidth="xl">
            <Paper className={styles.paper}>
                <Typography component="h1" variant="h5" color="secondary">
                    Submit guide
                </Typography>

                <GuideForm />
            </Paper>
        </Layout>
    )
}