import React from "react";
import { List } from "@material-ui/core";

import TwitchItem from "../TwitchItem/TwitchItem";

import styles from './TwitchList.module.scss';

export default function TwitchList(props) {
    const { data } = props;

    return (
        <List className={styles.root}>
            {data && data.twitch.map((item, i) => (
                <TwitchItem item={item} key={i} />
            ))}
        </List>
    )
}