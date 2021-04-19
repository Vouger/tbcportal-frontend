import React, {useState} from "react";
import {useQuery} from "@apollo/client";
import {Paper, Typography} from "@material-ui/core";

import queries from "@queries";
import Post from "modules/landing/components/Post/Post";

export default function PostsView() {
    const [filterClass, setFilterClass] = useState('all');
    const [filterContent, setFilterContent] = useState('all');

    const { loading, data, refetch } = useQuery(queries.guides.GET_GUIDES, {
        variables: { filterClass, filterContent }
    });

    return (
        <Paper spacing={6}>
            <Typography component="h1" variant="h4" color="secondary" style={{padding:'15px 25px'}}>
                News
            </Typography>

            {loading ? "Loading..." : ""}

            {!loading && data && data.guides.length === 0 ? "Nothing found" : ""}

            {!loading && data && data.guides.map((item) => (
                <Post data={item} />
            ))}
        </Paper>
    )
}