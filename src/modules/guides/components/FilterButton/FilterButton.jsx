import React from "react";
import clsx from "clsx";
import {Avatar, Box, Button} from "@material-ui/core";

import styles from './FilterButton.module.scss'
import ClassAvatar from "../ClassAvatar/ClassAvatar";

export default function FilterButton(props) {
    const {title, folder, name, selected} = props;

    const handleClick = () => {
        props.setSelected && props.setSelected(props.name);
    }

    return (
        <Button
            classes={{label: styles.label}}
            className={clsx(styles.button, selected && styles.selected)}
            onClick={handleClick}
            disableFocusRipple={true}
        >
            <ClassAvatar title={title} folder={folder} name={name} />
            {title}
        </Button>
    )
}