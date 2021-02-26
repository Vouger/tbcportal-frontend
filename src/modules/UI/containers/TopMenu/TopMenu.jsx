import React from 'react'
import { Link } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Avatar, Grid, Paper
} from '@material-ui/core'
import { Else, If, Then } from 'react-if'

import {TRoutes} from "../../../../shared/types";
import { cleanToken } from "../../../../shared/helpers";
import styles from './TopMenu.module.scss'

export default function TopMenu(props) {

    const handleLogout = () => {
        cleanToken();
    }

    return (
        <AppBar position="absolute" color="default" elevation={0} className={styles.appBar}>
            <Toolbar className={styles.toolbar}>
                <Link to="/" className={styles.title}>
                    <Avatar alt="Remy Sharp" src="/logo.png" />
                    <Typography variant="h6" noWrap className={styles.toolbarTitle}>
                        {props.title || "TBC portal" }
                    </Typography>
                </Link>
                <div className={styles.menu} > </div>
                <If condition={props.isAuth}>
                    <Then>
                        <Button onClick={handleLogout} color="primary" variant="contained" className={styles.link}>
                            Logout
                        </Button>
                    </Then>
                    <Else>
                        <Button component={Link} to={TRoutes.SIGNUP} color="primary" variant="contained" className={styles.link}>
                            Sign up
                        </Button>
                        <Button component={Link} to={TRoutes.LOGIN} color="primary" variant="contained" className={styles.link}>
                            Login
                        </Button>
                    </Else>
                </If>
            </Toolbar>
        </AppBar>
    )
}