import React from "react";
import { Box, Typography } from "@material-ui/core";

import ClassAvatar from "modules/guides/components/ClassAvatar/ClassAvatar";
import styles from "modules/guide/components/DetailsHeader/DetailsHeader.module.scss";

export default function DetailsHeader(props) {
    const { title, className } = props.guide;

    return (
        <Box className={styles.header}>
            <ClassAvatar title={className} folder="classes" name={className} />

            <Typography component="h1" variant="h4" color="secondary" className={styles.title}>
                {title}
            </Typography>
        </Box>
    )
}