import React from "react";
import { useParams } from "react-router-dom";

import Layout from "../../../UI/containers/Layout/Layout";
import { Box, Paper, Typography } from "@material-ui/core";

import styles from './GuideView.module.scss'
import { useQuery } from "@apollo/client";
import { Queries } from "../../../../shared/queries";

export default function GuideView() {
    const { id } = useParams()
    const { loading, data } = useQuery(Queries.GET_GUIDE, {
        variables: { id }
    });

    return (
        <Layout maxWidth="xl">
            <Paper>
                <Box className={styles.header}>
                    <Typography component="h1" variant="h4" color="secondary" className={styles.title}>
                        {!loading && data.guide.title}
                    </Typography>
                </Box>
                <Box className={styles.content}>
                    {!loading && data.guide.text}
                </Box>
            </Paper>
        </Layout>
    )
}