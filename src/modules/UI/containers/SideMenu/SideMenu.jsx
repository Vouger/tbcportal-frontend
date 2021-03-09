import React from 'react'
import clsx from 'clsx';
import { Link } from "react-router-dom";
import {
    Drawer,
    Divider,
    List,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText, Box, Toolbar
} from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import {TRoutes} from "../../../../shared/types";
import styles from './SideMenu.module.scss'
import {cleanToken} from "../../../../shared/helpers";
import {Else, If, Then} from "react-if";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function SideMenu(props) {
    const handleLogout = () => {
        cleanToken();
    }

    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(styles.drawerPaper, !props.open && styles.drawerPaperClose),
            }}
            className="MuiBox-root-2"
            open={props.open}
        >
            <div>
                <IconButton
                    onClick={() => { props.setOpen(false) }}
                    className={styles.menuButton}
                >
                    <ChevronLeftIcon />
                </IconButton>
            </div>

            <Divider />

            <List>
                <ListItem button component={Link} to={TRoutes.MAIN}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={Link} to={TRoutes.GUIDES}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Guides" />
                </ListItem>
            </List>

            <Divider />

            <List>
                <If condition={props.isAuth}>
                    <Then>
                        <ListItem button onClick={handleLogout}>
                            <ListItemIcon>
                                <ExitToAppIcon />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItem>
                    </Then>
                    <Else>
                        <ListItem button component={Link} to={TRoutes.LOGIN}>
                            <ListItemIcon>
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Login" />
                        </ListItem>
                    </Else>
                </If>
            </List>
        </Drawer>
    )
}