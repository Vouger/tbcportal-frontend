import React, {useState} from "react";
import {Button, IconButton, Menu, MenuItem} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {Else, If, Then} from "react-if";
import {Link} from "react-router-dom";

import {cleanToken} from "../../../../shared/helpers";
import {TRoutes} from "../../../../shared/types";
import styles from "./UserMenu.module.scss";

export default function UserMenu(props) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleLogout = () => {
        cleanToken();
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    }

    return (
        <If condition={props.isAuth}>
            <Then>
                <IconButton onClick={handleOpen} color="secondary" variant="contained" className={styles.link}>
                    <AccountCircleIcon />
                </IconButton>

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem component={Link} to={TRoutes.PROFILE}>Profile</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </Then>
            <Else>
                <Button component={Link} to={TRoutes.LOGIN} color="secondary" variant="contained" className={styles.link}>
                    Log in
                </Button>
            </Else>
        </If>
    )
}