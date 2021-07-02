import React, {useState} from "react";
import {Grid, TextField} from "@material-ui/core";
import PropTypes from "prop-types";

import StyledButton from "modules/UI/components/StyledButton/StyledButton";

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
                    className={styles.input}
                    variant="outlined"
                    margin="dense"
                    label="Поиск"
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
                <StyledButton
                    size="small"
                    onClick={handleClick}
                    className={styles.button}
                >
                    Найти
                </StyledButton>
            </Grid>
        </Grid>
    )
}

SearchBox.propTypes = {
    setKeyword: PropTypes.func.isRequired
}

export default SearchBox;