import React from "react";
import {toast} from "react-toastify";
import {useMutation} from "@apollo/client";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";

import {TRoutes} from "shared/types";
import queries from "@queries";
import StyledButton from "modules/UI/components/StyledButton/StyledButton";

function ButtonHide({id}) {
    const history = useHistory();
    const [ HideGuide ] = useMutation(queries.guides.HIDE);

    const handleHide = () => {
        HideGuide({variables: {id}}).then(({data}) => {
            const message = data && data.hideGuide;

            if (message) {
                toast.success(message);
                history.push(TRoutes.GUIDES);
            }
        }).catch(e => {});
    }

    return (
        <StyledButton onClick={handleHide}>
            Скрыть
        </StyledButton>
    )
}

ButtonHide.propTypes = {
    id: PropTypes.string.isRequired
}

export default ButtonHide;