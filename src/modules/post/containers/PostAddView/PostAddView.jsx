import React from "react";

import PostForm from "modules/post/components/PostForm/PostForm";
import StyledPaper from "modules/UI/components/StyledPaper/StyledPaper";

import styles from './PostAddView.module.scss';

export default function PostAddView() {
    return (
        <StyledPaper className={styles.paper}>
            <PostForm />
        </StyledPaper>
    )
}
