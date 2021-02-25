import React from 'react';
import { Link as RouterLink  } from "react-router-dom";
import {
    Avatar,
    CssBaseline,
    Typography,
    Grid,
    Link
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import {TRoutes} from "../../../../shared/types";
import Layout from "../../../UI/containers/Layout/Layout";
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './LoginView.module.scss'

export default function LoginView() {
    return (
        <Layout title="Login" maxWidth="xs">
            <CssBaseline />
            <div className={styles.paper}>
                <Avatar className={styles.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>

                <LoginForm />

                <Grid container>
                    <Grid item xs>
                        <Link component={RouterLink} to={TRoutes.PASSWORD} variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link component={RouterLink} to={TRoutes.SIGNUP} variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </Layout>
    );
}