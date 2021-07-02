import React from 'react';
import clsx from "clsx";

import styles from './StyledPaper.module.scss'

export default function StyledPaper(props) {
    return (
        <div className={clsx(styles.root, props.className)}>
            {props.children}
        </div>
    )
}