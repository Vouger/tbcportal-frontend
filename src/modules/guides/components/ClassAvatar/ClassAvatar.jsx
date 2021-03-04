import React from "react";
import { Avatar } from "@material-ui/core";
import clsx from "clsx";

import styles from "./ClassAvatar.module.scss";

export default function ClassAvatar(props) {
    const {title, folder, name} = props;

    return (
        <Avatar alt={title} src={`/static/icons/${folder}/${name}.png`} className={clsx(styles.filter, styles[name] )}/>
    )
}