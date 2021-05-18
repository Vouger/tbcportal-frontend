import React from "react";
import {Box, Paper, Typography} from "@material-ui/core";
import RawHtml from "modules/UI/components/RawHtml/RawHtml";

import styles from "./PostWrapper.module.scss";

function PostWrapper({post}) {
    return (
        <Paper>
            <Typography component="h1" variant="h4" color="secondary" className={styles.title}>
                {post.title}
            </Typography>
            <Box className={styles.content}>
                <RawHtml>{post.text}</RawHtml>
            </Box>
        </Paper>
    )
}

export default PostWrapper;