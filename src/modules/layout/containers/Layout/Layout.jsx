import React, {useState} from 'react'
import { connect } from "react-redux";
import {Container} from "@material-ui/core";

import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import Footer from "../Footer/Footer";
import styles from './Layout.module.scss'

function Layout(props) {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.root}>

            <Header open={open} setOpen={setOpen} isAuth={props.isAuth} role={props.role} title={props.title}/>

            <SideMenu open={open} setOpen={setOpen} isAuth={props.isAuth} role={props.role} />

            <video autoPlay muted loop className={styles.video}>
                <source src="/static/background.mp4" type="video/mp4" />
            </video>

            <Container component="main" maxWidth={props.maxWidth || "lg"} className={styles.content}>
                <div className={styles.appBarSpacer} />

                {props.children}
            </Container>

            <Footer />
        </div>
    )
}

const mapStateToProps = state => ({
    isAuth: state.user.isAuth,
    role: state.user.role
})

export default connect(mapStateToProps)(Layout)