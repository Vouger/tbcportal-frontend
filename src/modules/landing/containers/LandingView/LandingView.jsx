import React from "react";
import { Grid } from "@material-ui/core";

import Layout from "modules/layout/containers/Layout/Layout";
import TwitchView from "../TwitchView/TwitchView";
import PostsView from "modules/landing/containers/PostsView/PostsView";

export default function LandingView() {
    return (
        <Layout maxWidth="xl">
            <Grid container spacing={6}>
                <Grid item lg={9} xs={12}>
                    <PostsView />
                </Grid>
                <Grid item lg={3} xs={12}>
                    <TwitchView />
                </Grid>
            </Grid>
        </Layout>
    )
}