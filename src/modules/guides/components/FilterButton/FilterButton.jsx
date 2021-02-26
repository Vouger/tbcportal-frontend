import React from "react";
import clsx from "clsx";
import {Avatar, Button} from "@material-ui/core";

import styles from './FilterButton.module.scss'

export default function FilterButton(props) {
    const handleClick = () => {
        props.setSelected && props.setSelected(props.name);
    }

    return (
        <Button
            classes={{label: styles.label}}
            className={clsx(styles.button, props.selected && styles.selected)}
            onClick={handleClick}
            disableFocusRipple={true}
        >
            <Avatar alt={props.title} src={`static/icons/classes/${props.name}.png`} className={clsx(styles.filter, styles[props.name] )}/>
            {props.title}
        </Button>
    )
}