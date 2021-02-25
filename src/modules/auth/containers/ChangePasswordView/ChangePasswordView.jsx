import React from 'react';
import { Avatar, CssBaseline, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Layout from "../../../UI/containers/Layout/Layout";
import ChangePasswordForm from '../../components/ChangePasswordForm/ChangePasswordForm'
import styles from './ChangePasswordView.module.scss'

export default function ChangePasswordView() {
    return (
        <Layout title="Change password">
            <CssBaseline />
            <div className={styles.paper}>
                <Avatar className={styles.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Change password
                </Typography>

                <ChangePasswordForm />

            </div>
        </Layout>
    );
}