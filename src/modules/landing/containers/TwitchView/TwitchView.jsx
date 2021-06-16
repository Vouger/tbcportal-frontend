import React from "react";
import { LinearProgress, Paper } from "@material-ui/core";
import {useQuery} from "@apollo/client";

import queries from "@queries";
import TwitchList from "../../components/TwitchList/TwitchList";

import StreamsIcon from 'assets/streams.png';

import styles from "./TwitchView.module.scss";

export default function TwitchView() {
    const { loading, data } = useQuery(queries.twitch.LIST);

    return (
        <Paper className={styles.root}>
            <div className={styles.header}>
                <img src={StreamsIcon} alt='Стримы' />
                <div className={styles.title}>Стримы</div>
            </div>

            {loading ? <LinearProgress /> : ""}

            {!loading && data && data.twitch.length === 0 ? "Нет активных стримов" : <TwitchList data={data}/>}
        </Paper>
    )
}