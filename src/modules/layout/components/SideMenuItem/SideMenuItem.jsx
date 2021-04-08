import React from "react";
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";

export default function SideMenuItem (props) {
    return (
        <ListItem button component={props.component} to={props.to} onClick={props.onClick}>
            <ListItemIcon>
                {props.icon && (<props.icon />)}
            </ListItemIcon>
            <ListItemText primary={props.label} />
        </ListItem>
    )
}