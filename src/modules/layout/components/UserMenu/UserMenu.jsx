import React, {useState} from "react";
import {Button, IconButton, Menu, MenuItem} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {Else, If, Then} from "react-if";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import { cleanAuth } from "shared/helpers";
import {TRoutes} from "shared/types";

import styles from "./UserMenu.module.scss";

function UserMenu({isAuth}) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleLogout = () => {
        cleanAuth();
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    }

    return (
        <If condition={isAuth}>
            <Then>
                <IconButton onClick={handleOpen} color="secondary" variant="contained" className={styles.user}>
                    <AccountCircleIcon />
                </IconButton>

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem component={Link} to={TRoutes.PROFILE}>Профиль</MenuItem>
                    <MenuItem onClick={handleLogout}>Выйти</MenuItem>
                </Menu>
            </Then>
            <Else>
                <Button component={Link} to={TRoutes.LOGIN} className={styles.link}>
                    Вход
                </Button>
            </Else>
        </If>
    )
}

UserMenu.propTypes = {
    isAuth: PropTypes.bool.isRequired
}

export default UserMenu;