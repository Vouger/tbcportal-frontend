import React from 'react'
import { AppBar, Toolbar, IconButton, Box } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

import UserMenu from "../../components/UserMenu/UserMenu";
import Navigation from "../../components/Navigation/Navigation";
import Logo from "../../components/Logo/Logo";
import styles from './Header.module.scss'
import PropTypes from "prop-types";

function Header(props) {
    return (
        <AppBar position="absolute" color="default" className={styles.root}>
            <Toolbar className={styles.toolbar}>

                <Box display={{ xs: 'block', sm: 'none' }}>
                    <IconButton
                        edge="start"
                        color="secondary"
                        aria-label="open drawer"
                        onClick={() => { props.setOpen(true) }}
                        className={styles.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>

                <Logo title={props.title} />

                <Box className={styles.menu} display={{ xs: 'none', sm: 'block' }}>
                    <Navigation />
                </Box>

                <Box display={{ xs: 'none', sm: 'block' }}>
                    <UserMenu isAuth={props.isAuth} role={props.role} />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

Header.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    role: PropTypes.string.isRequired
}

export default Header;