import React from "react";
import { Grid } from "@material-ui/core";

import Layout from "../../../layout/containers/Layout/Layout";
import TwitchView from "../TwitchView/TwitchView";

export default function LandingView() {
    return (
        <Layout maxWidth="xl">
            <Grid container spacing={6}>
                <Grid item lg={10} xs={12}>
                    landing
                </Grid>
                <Grid item lg={2} xs={12}>
                    <TwitchView />
                </Grid>
            </Grid>
        </Layout>
    )
}