import React, {useState} from "react";
import {ClickAwayListener, IconButton, List, ListItem, Paper, Popper} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {Else, If, Then} from "react-if";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import { cleanAuth } from "shared/helpers";
import {TRoutes} from "shared/types";

import StyledButton from "modules/UI/components/StyledButton/StyledButton";

import styles from "./UserMenu.module.scss";

function UserMenu({isAuth}) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleLogout = () => {
        cleanAuth();
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <If condition={isAuth}>
            <Then>
                <IconButton onClick={handleClick} color="secondary" variant="contained" className={styles.user}>
                    <AccountCircleIcon />
                </IconButton>
                <Popper id='profile-popper' open={Boolean(anchorEl)} anchorEl={anchorEl} transition className={styles.popper}>
                    <ClickAwayListener onClickAway={handleClose}>
                        <List component={Paper}>
                            <ListItem button component={Link} to={TRoutes.PROFILE}>
                                Профиль
                            </ListItem>
                            <ListItem button onClick={handleLogout}>
                                Выйти
                            </ListItem>
                        </List>
                    </ClickAwayListener>
                </Popper>
            </Then>
            <Else>
                <StyledButton to={TRoutes.LOGIN}>
                    Вход
                </StyledButton>
            </Else>
        </If>
    )
}

UserMenu.propTypes = {
    isAuth: PropTypes.bool.isRequired
}

export default UserMenu;