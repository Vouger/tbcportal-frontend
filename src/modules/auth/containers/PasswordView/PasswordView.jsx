import React from 'react';
import { Avatar, CssBaseline, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Layout from "modules/layout/containers/Layout/Layout";
import PasswordForm from '../../components/PasswordForm/PasswordForm'
import styles from './PasswordView.module.scss'

export default function PasswordView() {
    return (
        <Layout maxWidth="xs">
            <CssBaseline />
            <div className={styles.paper}>
                <Avatar className={styles.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Восстановление пароля
                </Typography>

                <PasswordForm />

            </div>
        </Layout>
    );
}