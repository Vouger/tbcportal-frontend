import React from "react";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./StyledButton.module.scss";

function StyledButton(props) {
    const {to, size, className, onClick, type} = props;

    let propsObject = {
        className : clsx(styles.root, className, styles[size]),
        type: type
    };

    if (to) {
        propsObject.to = to;
        propsObject.component = Link;
    }

    if (onClick) {
        propsObject.onClick = onClick;
    }

    return (
        <Button {...propsObject}>
            {props.children}
        </Button>
    )
}

StyledButton.defaultProps = {
    size: 'large'
};

StyledButton.propTypes = {
    to: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large'])
}

export default StyledButton;