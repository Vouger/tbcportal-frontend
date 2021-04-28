import React from "react";
import {Button, Grid, TextField} from "@material-ui/core";

import styles from "./SearchBox.module.scss";

function SearchBox () {
    return (
        <Grid container spacing={1}>
            <Grid item xl={9} lg={10} md={9} sm={9} xs={12}>
                <TextField id="standard-basic" variant="outlined" margin="dense" label="Search" fullWidth/>
            </Grid>
            <Grid item md={2} sm={3} xs={12}>
                <Button variant="contained" color="primary" className={styles.button} fullWidth> Search </Button>
            </Grid>
        </Grid>
    )
}

export default SearchBox;