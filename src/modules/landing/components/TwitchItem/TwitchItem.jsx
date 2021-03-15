import React from "react";
import {
    Avatar,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader
} from "@material-ui/core";

import styles from "./TwitchItem.module.scss";

export default function TwitchItem(props) {
    const { name, logo, gameName, views } = props.item;

    return (
        <ListItem className={styles.root} component="a" target='_blank' href={'https://www.twitch.tv/' + name}>
            <ListItemIcon>
                <Avatar alt={name} src={logo}/>
            </ListItemIcon>
            <ListItemText secondary={gameName} primary={name} />
            <ListSubheader className={styles.online}>
                {views}
            </ListSubheader>
        </ListItem>
    )
}