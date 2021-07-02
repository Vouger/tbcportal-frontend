import React from "react";
import {Container} from "@material-ui/core";

import ProfileForm from "../../components/ProfileForm/ProfileForm";
import StyledPaper from "modules/UI/components/StyledPaper/StyledPaper";

import styles from './ProfileView.module.scss'

export default function ProfileView() {
    return (
        <Container component={StyledPaper} maxWidth='sm' className={styles.paper}>
            <ProfileForm />
        </Container>
    )
}