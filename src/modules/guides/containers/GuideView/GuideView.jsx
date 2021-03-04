import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Box, Grid, Paper } from "@material-ui/core";

import DetailsHeader from "../DetailsHeader/DetailsHeader";
import Layout from "../../../UI/containers/Layout/Layout";
import RawHtml from "../../../UI/components/RawHtml/RawHtml";
import { Queries } from "../../../../shared/queries";
import styles from './GuideView.module.scss'

export default function GuideView() {
    const { id } = useParams()
    const { loading, data } = useQuery(Queries.GET_GUIDE, {
        variables: { id }
    });

    useEffect(() => {
        window.$WowheadPower.refreshLinks();
    })

    return (
        <Layout maxWidth="xl">
            <Paper className={styles[data && data.guide.className]}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        {!loading && data?
                            (
                                <DetailsHeader guide={data.guide} />
                            ) : "" }
                    </Grid>
                    <Grid item lg={8} xs={12}>
                        <Box className={styles.content}>
                            {!loading && data ?
                                (<RawHtml>{data.guide.text}</RawHtml>)
                                : ""
                            }
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Layout>
    )
}