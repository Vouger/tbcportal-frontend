import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {Box, Grid, LinearProgress, Paper, Typography} from "@material-ui/core";

import queries from "@queries";

import Layout from "modules/layout/containers/Layout/Layout";
import RawHtml from "../../../UI/components/RawHtml/RawHtml";
import styles from './PostView.module.scss'

export default function PostView() {
    const { id } = useParams()
    const { loading, data } = useQuery(queries.posts.GET, {
        variables: { id }
    });

    useEffect(() => {
        window.$WowheadPower.refreshLinks();
    })

    return (
        <Layout maxWidth="xl">
            <Paper>
                {loading ? <LinearProgress /> : ""}

                {!loading && data ? (
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography component="h1" variant="h4" color="secondary" className={styles.title}>
                                {data.post.title}
                            </Typography>
                        </Grid>
                        <Grid item lg={8} xs={12}>
                            <Box className={styles.content}>
                                <RawHtml>{data.post.text}</RawHtml>
                            </Box>
                        </Grid>
                    </Grid>
                ) : ""}
            </Paper>
        </Layout>
    )
}