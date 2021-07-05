import React from "react";
import RawHtml from "modules/UI/components/RawHtml/RawHtml";
import StyledPaper from "modules/UI/components/StyledPaper/StyledPaper";

import styles from "./PostWrapper.module.scss";

function PostWrapper({post}) {
    return (
        <StyledPaper>
            <div className={styles.title}>
                {post.title}
            </div>
            <div className={styles.content}>
                <RawHtml>{post.text}</RawHtml>
            </div>
        </StyledPaper>
    )
}

export default PostWrapper;