import React from "react";
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

import styles from "./SideMenuItem.module.scss";

export default function SideMenuItem (props) {
    const location = useLocation();
    const isCurrent = location.pathname === props.to;

    return (
        <ListItem
            button
            component={props.component}
            to={props.to}
            onClick={props.onClick}
            className={clsx(styles.root, isCurrent && styles.current)}
        >
            <ListItemIcon>
                {props.icon && (<props.icon />)}
            </ListItemIcon>
            <ListItemText primary={props.label} />
        </ListItem>
    )
}