import React from "react";
import { List } from "@material-ui/core";

import TwitchItem from "../TwitchItem/TwitchItem";

export default function TwitchList(props) {
    const { data } = props;

    return (
        <List>
            {data && data.twitch.map((item, i) => (
                <TwitchItem item={item} key={i} />
            ))}
        </List>
    )
}