import React from "react";
import {useQuery} from "@apollo/client";
import {LinearProgress, Paper, Typography} from "@material-ui/core";

import queries from "@queries";
import Post from "modules/landing/components/Post/Post";

export default function PostsView() {
    const { loading, data, refetch } = useQuery(queries.posts.LIST);

    return (
        <Paper spacing={6}>
            <Typography component="h1" variant="h4" color="secondary" style={{padding:'15px 25px'}}>
                News
            </Typography>

            {loading ? <LinearProgress /> : ""}

            {!loading && data && data.posts.length === 0 ? "Nothing found" : ""}

            {!loading && data && data.posts.map((item) => (
                <Post data={item} />
            ))}
        </Paper>
    )
}