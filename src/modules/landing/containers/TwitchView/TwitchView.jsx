import React from "react";
import { Paper, Typography } from "@material-ui/core";
import {useQuery} from "@apollo/client";

import queries from "../../../../queries";
import TwitchList from "../../components/TwitchList/TwitchList";
import styles from "./TwitchView.module.scss";

export default function TwitchView() {
    const { loading, data, refetch } = useQuery(queries.twitch.GET);

    return (
        <Paper className={styles.root}>
            <Typography component="h1" variant="h6" color="secondary" className={styles.title}>
                Twitch streamers
            </Typography>

            {loading ? "Loading..." : ""}

            {!loading && data && data.twitch.length === 0 ? "No active stream" : <TwitchList data={data}/>}
        </Paper>
    )
}