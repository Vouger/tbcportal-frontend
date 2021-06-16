import React, {useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
import {useQuery} from "@apollo/client";

import queries from "@queries";

import PostsView from "modules/landing/containers/LandingPostsView/LandingPostsView";
import Banner from "modules/landing/components/Banner/Banner";
import TwitchView from "../TwitchView/TwitchView";
import {TBanner} from "shared/types";

export default function LandingView() {
    const [post, setPost] = useState({});

    const { data } = useQuery(queries.settings.LIST_BY_KEYS, {
        variables: { names: TBanner.FIELDS },
        fetchPolicy: "no-cache"
    });

    useEffect(() => {
        if (data && data.settings) {
            let values = {};
            data.settings.forEach((item) => {
                values[item.name] = item.value;
            })
            setPost(values);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <>
            <Grid container spacing={6}>
                <Grid item xl={9} lg={8} xs={12}>
                    <Banner post={post}/>
                    <PostsView />
                </Grid>
                <Grid item xl={3} lg={4} xs={12}>
                    <TwitchView />
                </Grid>
            </Grid>
        </>
    )
}