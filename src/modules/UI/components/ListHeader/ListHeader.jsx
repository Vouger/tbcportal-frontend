import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {Button, Grid, Typography} from "@material-ui/core";

import styles from "./ListHeader.module.scss";

function ListHeader({title, link, showButton}) {
    return (
        <Grid container className={styles.root}>
            <Grid item lg={2} xs={12}>
                <Typography component="h1" variant="h4" color="secondary">
                    {title}
                </Typography>
            </Grid>
            <Grid item lg={9} xs={12}>
            </Grid>
            <Grid item lg={1} xs={12} className={styles.button}>
                {showButton && (
                    <Button component={Link} to={link} fullWidth variant="contained" color="primary">
                        Создать
                    </Button>
                )}
            </Grid>
        </Grid>
    )
}

ListHeader.defaultProps = {
    showButton: false
};

ListHeader.propTypes = {
    title: PropTypes.string.isRequired,
    showButton: PropTypes.bool.isRequired,
    link: PropTypes.string
}

export default ListHeader;