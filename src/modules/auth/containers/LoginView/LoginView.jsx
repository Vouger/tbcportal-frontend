import React from 'react';
import { Link as RouterLink  } from "react-router-dom";
import {
    Avatar,
    Typography,
    Grid,
    Link
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import {TRoutes} from "shared/types";

import Layout from "modules/layout/containers/Layout/Layout";
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './LoginView.module.scss'

export default function LoginView(props) {
    return (
        <Layout maxWidth="xs">
            <div className={styles.paper}>
                <Avatar className={styles.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Вход
                </Typography>

                <LoginForm {...props} />

                <Grid container>
                    <Grid item xs>
                        <Link component={RouterLink} to={TRoutes.PASSWORD} color="secondary" variant="body2">
                            Забыли пароль ?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link component={RouterLink} to={TRoutes.SIGNUP} color="secondary" variant="body2">
                            {"Нет аккаунта ? Зарегестрироваться"}
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </Layout>
    );
}