import React from "react";
import { LinearProgress } from "@material-ui/core";
import {useQuery} from "@apollo/client";

import queries from "@queries";
import TwitchList from "../../components/TwitchList/TwitchList";
import StyledPaper from "modules/UI/components/StyledPaper/StyledPaper";

import StreamsIcon from 'assets/streams.png';

import styles from "./TwitchView.module.scss";

export default function TwitchView() {
    const { loading, data } = useQuery(queries.twitch.LIST);

    return (
        <StyledPaper>
            <div className={styles.header}>
                <img src={StreamsIcon} alt='Стримы' />
                <div className={styles.title}>Стримы</div>
            </div>

            {loading ? <LinearProgress /> : ""}

            {!loading && data && data.twitch.length === 0 ? "Нет активных стримов" : <TwitchList data={data}/>}
        </StyledPaper>
    )
}