import React, { useState } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";

import TopMenu from "../TopMenu/TopMenu";
import styles from './Layout.module.scss'

function Layout(props) {
    return (
        <div className={styles.root}>

            <TopMenu isAuth={props.isAuth} title={props.title}/>

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