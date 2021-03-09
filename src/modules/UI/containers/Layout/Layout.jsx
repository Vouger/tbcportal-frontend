import React, {useState} from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {Box, Container} from "@material-ui/core";

import TopMenu from "../TopMenu/TopMenu";
import SideMenu from "../SideMenu/SideMenu";
import styles from './Layout.module.scss'

function Layout(props) {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.root}>

            <TopMenu open={open} setOpen={setOpen} isAuth={props.isAuth} title={props.title}/>

            <SideMenu display={{ xs: 'block', sm: 'none' }} open={open} setOpen={setOpen} isAuth={props.isAuth} />

            <Container component="main" maxWidth={props.maxWidth || "lg"} className={styles.content}>
                <div className={styles.appBarSpacer} />

                {props.children}
            </Container>

        </div>
    )
}

TopMenu.propTypes = {
    isAuth: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    isAuth: state.user.isAuth
})

export default connect(mapStateToProps)(Layout)