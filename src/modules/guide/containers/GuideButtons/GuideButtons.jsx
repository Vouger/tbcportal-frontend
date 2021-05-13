import React from 'react';
import {connect} from "react-redux";
import {Paper} from "@material-ui/core";
import PropTypes from "prop-types";

import {TRoles} from "shared/types";

import ButtonApprove from "modules/guide/containers/ButtonApprove/ButtonApprove";
import ButtonHide from "modules/guide/containers/ButtonHide/ButtonHide";

import styles from 'modules/guide/containers/GuideButtons/GuideButtons.module.scss'

function GuideButtons({role, guide}) {
    const { isApproved, id } = guide;

    if (role !== TRoles.ADMIN) {
        return false;
    }

    return (
        <Paper className={styles.root}>
            {
                isApproved
                    ?   ( <ButtonHide id={id} /> )
                    :   ( <ButtonApprove id={id} /> )
            }
        </Paper>
    )
}

GuideButtons.propTypes = {
    role: PropTypes.string.isRequired,
    guide: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    role: state.user.role
})

export default connect(mapStateToProps)(GuideButtons);