import React from 'react';
import {
    Avatar,
    Container,
    Typography
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import StyledPaper from "modules/UI/components/StyledPaper/StyledPaper";
import styles from './RegistrationView.module.scss'

export default function RegistrationView() {
    return (
        <Container component={StyledPaper} maxWidth='xs' className={styles.paper}>
            <Avatar className={styles.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Создать аккаунт
            </Typography>

            <RegistrationForm />
        </Container>
    );
}