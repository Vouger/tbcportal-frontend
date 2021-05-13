import {Button} from "@material-ui/core";
import React from "react";
import {toast} from "react-toastify";
import {useMutation} from "@apollo/client";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";

import {TRoutes} from "shared/types";
import queries from "@queries";

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
        <Button onClick={handleHide} variant="contained" color="primary">
            Скрыть
        </Button>
    )
}

ButtonHide.propTypes = {
    id: PropTypes.string.isRequired
}

export default ButtonHide;