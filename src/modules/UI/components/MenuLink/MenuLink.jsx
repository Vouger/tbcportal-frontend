import React from "react";
import clsx from "clsx";
import { Link } from "@material-ui/core";
import {Link as RouterLink, useLocation} from "react-router-dom";

import styles from './MenuLink.module.scss'

export default function MenuLink(props) {
    const location = useLocation();
    const isCurrent = location.pathname === props.to;

    return (
        <Link
            component={RouterLink}
            variant="body2"
            color="secondary"
            underline="none"
            className={clsx(styles.link, isCurrent && styles.current)}
            {...props}
        >
            {props.children}
        </Link>
    );
}

