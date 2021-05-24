import React from 'react';
import {
    Avatar,
    CssBaseline,
    Typography
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import styles from './RegistrationView.module.scss'

export default function RegistrationView() {
    return (
        <>
            <CssBaseline />
            <div className={styles.paper}>
                <Avatar className={styles.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Создать аккаунт
                </Typography>

                <RegistrationForm />

            </div>
        </>
    );
}