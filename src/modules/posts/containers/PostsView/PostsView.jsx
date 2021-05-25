import React from "react";
import {useLazyQuery} from "@apollo/client";
import {Grid} from "@material-ui/core";

import queries from "@queries";

import TwitchView from "modules/landing/containers/TwitchView/TwitchView";
import PostsWrapper from "modules/posts/components/PostsWrapper/PostsWrapper";

function PostsView() {
    const [ fetchQuery, { loading, data } ] = useLazyQuery(queries.posts.LIST);

    return (
        <Grid container spacing={6}>
            <Grid item lg={9} xs={12}>
                <PostsWrapper
                    fetchQuery={fetchQuery}
                    loading={loading}
                    total={data && data.posts.total}
                    list={data && data.posts.list}
                />
            </Grid>
            <Grid item lg={3} xs={12}>
                <TwitchView />
            </Grid>
        </Grid>
    )
}

export default PostsView;