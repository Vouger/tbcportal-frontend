import React from 'react'
import clsx from 'clsx';
import { Link } from "react-router-dom";
import {
    Drawer,
    Divider,
    List,
    IconButton
} from '@material-ui/core'
import {Else, If, Then} from "react-if";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import SideMenuItem from "../../components/SideMenuItem/SideMenuItem";
import {TRoutes} from "../../../../shared/types";
import { cleanAuth } from "../../../../shared/helpers";
import styles from './SideMenu.module.scss'

export default function SideMenu(props) {
    const handleLogout = () => {
        cleanAuth();
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
                <SideMenuItem component={Link} to={TRoutes.MAIN} label="Home" icon={HomeIcon} />
                <SideMenuItem component={Link} to={TRoutes.GUIDES} label="Guides" icon={DashboardIcon} />

                <Divider />

                <If condition={props.isAuth}>
                    <Then>
                        <SideMenuItem component={Link} to={TRoutes.PROFILE} label="Profile" icon={AccountCircleIcon} />
                        <SideMenuItem onClick={handleLogout} label="Logout" icon={ExitToAppIcon} />
                    </Then>
                    <Else>
                        <SideMenuItem component={Link} to={TRoutes.LOGIN} label="Login" icon={AccountCircleIcon} />
                    </Else>
                </If>
            </List>
        </Drawer>
    )
}