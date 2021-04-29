import React, {useState} from "react";
import {Button, Grid, TextField} from "@material-ui/core";
import PropTypes from "prop-types";

import styles from "./SearchBox.module.scss";

function SearchBox ({setKeyword}) {
    const [ value, setValue ] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);

        if (event.target.value === '') {
            setKeyword('');
        }
    }

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            setKeyword(value);
        }
    }

    const handleClick = () => {
        setKeyword(value);
    }

    return (
        <Grid container spacing={1}>
            <Grid item xl={9} lg={10} md={9} sm={9} xs={12}>
                <TextField
                    variant="outlined"
                    margin="dense"
                    label="Search"
                    fullWidth
                    value={value}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    inputProps={{
                        name: 'keyword',
                        id: 'keyword',
                    }}
                />
            </Grid>
            <Grid item md={2} sm={3} xs={12}>
                <Button
                    variant="contained"
                    color="primary"
                    className={styles.button}
                    onClick={handleClick}
                    fullWidth
                >
                    Search
                </Button>
            </Grid>
        </Grid>
    )
}

SearchBox.propTypes = {
    setKeyword: PropTypes.func.isRequired
}

export default SearchBox;