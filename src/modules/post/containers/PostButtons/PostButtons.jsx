import React from 'react';
import {connect} from "react-redux";
import {Grid, Paper} from "@material-ui/core";
import PropTypes from "prop-types";

import {TRoles} from "shared/types";

import ButtonEdit from "modules/post/containers/ButtonEdit/ButtonEdit";
import ButtonDelete from "modules/post/containers/ButtonDelete/ButtonDelete";

import styles from 'modules/guide/containers/GuideButtons/GuideButtons.module.scss'

function PostButtons({role, post}) {
    const { id } = post;

    if (role !== TRoles.ADMIN) {
        return false;
    }

    return (
        <Paper className={styles.root}>
            <Grid container spacing={6}>
                <Grid item lg={6} xs={12}>
                    <ButtonEdit id={id} />
                </Grid>
                <Grid item lg={6} xs={12}>
                    <ButtonDelete id={id} />
                </Grid>
            </Grid>
        </Paper>
    )
}

PostButtons.propTypes = {
    role: PropTypes.string.isRequired,
    guide: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    role: state.user.role
})

export default connect(mapStateToProps)(PostButtons);
