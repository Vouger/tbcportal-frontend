import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Grid, LinearProgress } from "@material-ui/core";

import queries from "@queries";

import PostWrapper from "modules/post/components/PostWrapper/PostWrapper";
import TwitchView from "modules/landing/containers/TwitchView/TwitchView";
import MetaTags from "modules/seo/components/MetaTags/MetaTags";
import PostButtons from "../PostButtons/PostButtons";

export default function PostView() {
    const { id } = useParams()
    const { loading, data } = useQuery(queries.posts.GET, {
        fetchPolicy: "network-only",
        variables: { id }
    });

    useEffect(() => {
        if (window.$WowheadPower) {
            window.$WowheadPower.refreshLinks();
        }
    })

    return (
        <Grid container spacing={6}>
            <MetaTags title={data?.post?.title} wowhead={true} />

            <Grid item lg={9} xs={12}>
                {loading ? <LinearProgress /> : ""}

                {!loading && data ? (
                    <PostWrapper post={data.post} />
                ) : ""}
            </Grid>

            <Grid item lg={3} xs={12}>
                {!loading && data ? <PostButtons post={data.post} />  : ""}
                <TwitchView />
            </Grid>
        </Grid>
    )
}
