import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {Grid} from "@material-ui/core";

import queries from "@queries";

import Layout from "modules/layout/containers/Layout/Layout";
import GuideWrapper from "modules/guide/components/GuideWrapper/GuideWrapper";
import TwitchView from "modules/landing/containers/TwitchView/TwitchView";
import GuideButtons from "modules/guide/containers/GuideButtons/GuideButtons";

export default function GuideView() {
    const { id } = useParams()
    const { loading, data } = useQuery(queries.guides.GET_GUIDE, {
        variables: { id }
    });

    useEffect(() => {
        window.$WowheadPower.refreshLinks();
    })

    return (
        <Layout maxWidth="xl">
            <Grid container spacing={6}>
                <Grid item lg={9} xs={12}>
                    {!loading && data ? <GuideWrapper guide={data.guide} /> : ""}
                </Grid>
                <Grid item lg={3} xs={12}>
                    {!loading && data ? <GuideButtons guide={data.guide} />  : ""}
                    <TwitchView />
                </Grid>
            </Grid>
        </Layout>
    )
}