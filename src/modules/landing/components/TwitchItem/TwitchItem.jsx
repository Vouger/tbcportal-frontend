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
        <ListItem className={styles.root} component="a" target='_blank' rel='noreferrer' href={'https://www.twitch.tv/' + name}>
            <ListItemIcon className={styles.avatarWrapper}>
                <Avatar alt={name} src={logo} className={styles.avatar} />
            </ListItemIcon>
            <ListItemText
                classes={{
                    primary: styles.name,
                    secondary: styles.game,
                }}
                secondary={gameName}
                primary={name}
            />
            <ListSubheader className={styles.online}>
                {views}
            </ListSubheader>
        </ListItem>
    )
}