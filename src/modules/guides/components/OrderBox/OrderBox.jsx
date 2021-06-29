import React from "react";
import PropTypes from "prop-types";
import StyledSelect from "modules/UI/components/StyledSelect/StyledSelect";

function OrderBox({ orderBy, setOrderBy }) {

    const handleChange = (event) => {
        setOrderBy(event.value);
        return event.value
    }
    const options = [
        { value: '', label: 'Отсортировать' },
        { value: 'views', label: 'По просмотрам' },
        { value: 'created', label: 'Сначала новые' },
    ];

    return (
            <StyledSelect
                onChange={handleChange}
                placeholder="Отсортировать"
                options={options}
            />
    )
}

OrderBox.propTypes = {
    orderBy: PropTypes.string.isRequired,
    setOrderBy: PropTypes.func.isRequired
}

export default OrderBox;