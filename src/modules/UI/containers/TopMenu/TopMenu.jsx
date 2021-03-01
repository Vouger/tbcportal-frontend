import React from 'react'
import { Link } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    Avatar,
    IconButton,
    Box
} from '@material-ui/core'
import { Else, If, Then } from 'react-if'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import MenuLink from "../../components/MenuLink/MenuLink";
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
                <Box className={styles.menu} display={{ xs: 'none', sm: 'block' }}>
                    <MenuLink to={TRoutes.MAIN}>
                        Home
                    </MenuLink>
                    <MenuLink to={TRoutes.GUIDES}>
                        Guides
                    </MenuLink>
                    <MenuLink to={TRoutes.COMMUNITY}>
                        Community
                    </MenuLink>
                </Box>
                <If condition={props.isAuth}>
                    <Then>
                        <IconButton onClick={handleLogout} color="secondary" variant="contained" className={styles.link}>
                            <ExitToAppIcon />
                        </IconButton>
                    </Then>
                    <Else>
                        <IconButton component={Link} to={TRoutes.LOGIN} color="secondary" variant="contained" className={styles.link}>
                            <AccountCircleIcon />
                        </IconButton>
                    </Else>
                </If>
            </Toolbar>
        </AppBar>
    )
}