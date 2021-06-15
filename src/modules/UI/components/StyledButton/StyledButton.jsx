import React from "react";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";

import styles from "./StyledButton.module.scss";

function StyledButton(props) {

    return (
        <Button component={Link} to={props.to} className={styles.root}>
            {props.children}
        </Button>
    )
}

export default StyledButton;