import React from 'react'
import clsx from 'clsx';
import { Drawer, Divider, IconButton } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import SideMenuList from "../../components/SideMenuList/SideMenuList";
import styles from './SideMenu.module.scss'

export default function SideMenu(props) {
    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(styles.drawerPaper, !props.open && styles.drawerPaperClose),
            }}
            className="MuiBox-root-2"
            open={props.open}
        >
            <IconButton
                onClick={() => { props.setOpen(false) }}
                className={styles.menuButton}
            >
                <ChevronLeftIcon />
            </IconButton>

            <Divider />

            <SideMenuList isAuth={props.isAuth} role={props.role} />
        </Drawer>
    )
}