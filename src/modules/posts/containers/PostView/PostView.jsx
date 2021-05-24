import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Grid, LinearProgress } from "@material-ui/core";

import queries from "@queries";

import PostWrapper from "modules/posts/components/PostWrapper/PostWrapper";
import TwitchView from "modules/landing/containers/TwitchView/TwitchView";

export default function PostView() {
    const { id } = useParams()
    const { loading, data } = useQuery(queries.posts.GET, {
        variables: { id }
    });

    useEffect(() => {
        window.$WowheadPower.refreshLinks();
    })

    return (
        <Grid container spacing={6}>
            <Grid item lg={9} xs={12}>
                {loading ? <LinearProgress /> : ""}

                {!loading && data ? (
                    <PostWrapper post={data.post} />
                ) : ""}
            </Grid>

            <Grid item lg={3} xs={12}>
                <TwitchView />
            </Grid>
        </Grid>
    )
}