import React from "react";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./StyledButton.module.scss";

function StyledButton(props) {
    const {to, size, className} = props;

    return (
        <Button component={Link} to={to} className={clsx(styles.root, className,styles[size])}>
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