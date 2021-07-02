import React from "react";
import {Box, Typography} from "@material-ui/core";
import RawHtml from "modules/UI/components/RawHtml/RawHtml";
import StyledPaper from "modules/UI/components/StyledPaper/StyledPaper";

import styles from "modules/post/components/PostWrapper/PostWrapper.module.scss";

function PostWrapper({post}) {
    return (
        <StyledPaper>
            <Typography component="h1" variant="h4" color="secondary" className={styles.title}>
                {post.title}
            </Typography>
            <Box className={styles.content}>
                <RawHtml>{post.text}</RawHtml>
            </Box>
        </StyledPaper>
    )
}

export default PostWrapper;