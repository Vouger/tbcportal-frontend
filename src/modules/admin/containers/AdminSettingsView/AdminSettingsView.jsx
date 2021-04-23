import React, {useState} from "react";
import {Grid} from "@material-ui/core";
import {useQuery} from "@apollo/client";

import queries from "@queries";

import Banner from "modules/landing/components/Banner/Banner";
import SettingsForm from "modules/admin/components/SettingsForm/SettingsForm";
import Layout from "modules/layout/containers/Layout/Layout";
import {TBanner} from "shared/types";

export default function AdminSettingsView() {
    const [post, setPost] = useState({});

    const { data } = useQuery(queries.settings.LIST_BY_KEYS, {
        variables: { names: TBanner.FIELDS },
        fetchPolicy: "no-cache"
    });

    return (
        <Layout maxWidth="xl">
            <Grid container spacing={6}>
                <Grid item lg={3} xs={12}>
                    <SettingsForm setPost={setPost} data={data} />
                </Grid>
                <Grid item lg={9} xs={12}>
                    <Banner post={post} />
                </Grid>
            </Grid>
        </Layout>
    )
}