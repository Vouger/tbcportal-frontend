import React from 'react'
import { Link } from "react-router-dom";
import clsx from 'clsx';
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
import MenuIcon from '@material-ui/icons/Menu';

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

                <Box display={{ xs: 'block', sm: 'none' }}>
                    <IconButton
                        edge="start"
                        color="secondary"
                        aria-label="open drawer"
                        onClick={() => { props.setOpen(true) }}
                        className={clsx(styles.menuButton, props.open && styles.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>

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

                <Box display={{ xs: 'none', sm: 'block' }}>
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
                </Box>
            </Toolbar>
        </AppBar>
    )
}