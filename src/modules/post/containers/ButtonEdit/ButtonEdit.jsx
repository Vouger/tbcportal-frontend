import React from "react";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";

import {TRoutes} from "shared/types";

import StyledButton from "modules/UI/components/StyledButton/StyledButton";

function ButtonEdit({id}) {
    const history = useHistory();

    const handleEdit = () => {
        history.push(TRoutes.EDIT_POST(id));
    }

    return (
        <StyledButton fullWidth onClick={handleEdit}>
            Редактировать
        </StyledButton>
    )
}

ButtonEdit.propTypes = {
    id: PropTypes.string.isRequired
}

export default ButtonEdit;
