import React from "react";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import PropTypes from "prop-types";

function OrderBox({ orderBy, setOrderBy }) {

    const handleChange = (event) => {
        setOrderBy(event.target.value);
    }

    return (
        <FormControl margin="dense" variant="outlined" fullWidth>
            <InputLabel htmlFor="orderBy">Отсортировать</InputLabel>
            <Select
                value={orderBy}
                onChange={handleChange}
                label="Отсортировать"
                inputProps={{
                    name: 'age',
                    id: 'orderBy',
                }}
            >
                <MenuItem value="">Отсортировать</MenuItem>
                <MenuItem value="views">По просмотрам</MenuItem>
                <MenuItem value="created">Сначала новые</MenuItem>
            </Select>
        </FormControl>
    )
}

OrderBox.propTypes = {
    orderBy: PropTypes.string.isRequired,
    setOrderBy: PropTypes.func.isRequired
}

export default OrderBox;