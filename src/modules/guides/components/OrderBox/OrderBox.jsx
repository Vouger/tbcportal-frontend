import React from "react";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import PropTypes from "prop-types";

function OrderBox({ orderBy, setOrderBy }) {

    const handleChange = (event) => {
        setOrderBy(event.target.value);
    }

    return (
        <FormControl margin="normal" variant="outlined" fullWidth>
            <InputLabel htmlFor="orderBy">Sort by</InputLabel>
            <Select
                value={orderBy}
                onChange={handleChange}
                label="Sort by"
                inputProps={{
                    name: 'age',
                    id: 'orderBy',
                }}
            >
                <MenuItem value="">Sort by</MenuItem>
                <MenuItem value="views">Views</MenuItem>
                <MenuItem value="created">Most recent</MenuItem>
            </Select>
        </FormControl>
    )
}

OrderBox.propTypes = {
    orderBy: PropTypes.string.isRequired,
    setOrderBy: PropTypes.func.isRequired
}

export default OrderBox;