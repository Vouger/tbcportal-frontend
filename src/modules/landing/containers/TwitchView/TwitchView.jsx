import React from "react";
import {LinearProgress, Paper, Typography} from "@material-ui/core";
import {useQuery} from "@apollo/client";

import queries from "@queries";
import TwitchList from "../../components/TwitchList/TwitchList";
import styles from "./TwitchView.module.scss";

export default function TwitchView() {
    const { loading, data } = useQuery(queries.twitch.LIST);

    return (
        <Paper className={styles.root}>
            <Typography component="h1" variant="h6" color="secondary" className={styles.title}>
                Стримы
            </Typography>

            {loading ? <LinearProgress /> : ""}

            {!loading && data && data.twitch.length === 0 ? "Нет активных стримов" : <TwitchList data={data}/>}
        </Paper>
    )
}