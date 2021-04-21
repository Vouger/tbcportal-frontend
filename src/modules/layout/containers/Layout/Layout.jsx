import React, {useState} from 'react'
import { connect } from "react-redux";
import {Container} from "@material-ui/core";

import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import styles from './Layout.module.scss'

function Layout(props) {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.root}>

            <Header open={open} setOpen={setOpen} isAuth={props.isAuth} role={props.role} title={props.title}/>

            <SideMenu open={open} setOpen={setOpen} isAuth={props.isAuth} role={props.role} />

            <Container component="main" maxWidth={props.maxWidth || "lg"} className={styles.content}>
                <div className={styles.appBarSpacer} />

                {props.children}
            </Container>

        </div>
    )
}

const mapStateToProps = state => ({
    isAuth: state.user.isAuth,
    role: state.user.role
})

export default connect(mapStateToProps)(Layout)