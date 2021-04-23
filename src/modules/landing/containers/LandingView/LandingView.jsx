import React from "react";
import { Grid } from "@material-ui/core";

import Layout from "modules/layout/containers/Layout/Layout";
import PostsView from "modules/landing/containers/PostsView/PostsView";
import Banner from "modules/landing/components/Banner/Banner";
import TwitchView from "../TwitchView/TwitchView";

const mainFeaturedPost = {
    bannerTitle: 'Title of a longer featured blog post',
    bannerText: "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    bannerImage: 'https://source.unsplash.com/random',
    bannerLinkText: 'Continue reading…',
    bannerLink: 'https://source.unsplash.com/random',
};

export default function LandingView() {
    return (
        <Layout maxWidth="xl">
            <Grid container spacing={6}>
                <Grid item lg={9} xs={12}>
                    <Banner post={mainFeaturedPost} />
                    <PostsView />
                </Grid>
                <Grid item lg={3} xs={12}>
                    <TwitchView />
                </Grid>
            </Grid>
        </Layout>
    )
}