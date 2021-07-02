import React from 'react';
import {Avatar, Container, Typography} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import StyledPaper from "modules/UI/components/StyledPaper/StyledPaper";
import PasswordForm from '../../components/PasswordForm/PasswordForm'

import styles from './PasswordView.module.scss'

export default function PasswordView() {
    return (
        <Container component={StyledPaper} maxWidth='xs' className={styles.paper}>
            <Avatar className={styles.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Восстановление пароля
            </Typography>

            <PasswordForm />
        </Container>
    );
}