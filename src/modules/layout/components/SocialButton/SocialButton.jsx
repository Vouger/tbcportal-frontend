import React from "react";
import {IconButton} from "@material-ui/core";
import PropTypes from "prop-types";

import styles from './SocialButton.module.scss'

function SocialButton(props) {
    return (
        <IconButton component="a" target="_blank" href={props.href} className={styles.root}>
            {props.children}
        </IconButton>
    );
}

SocialButton.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
}

export default SocialButton;