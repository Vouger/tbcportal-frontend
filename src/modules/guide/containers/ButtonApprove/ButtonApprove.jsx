import {Button} from "@material-ui/core";
import React from "react";
import {toast} from "react-toastify";
import {useMutation} from "@apollo/client";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";

import queries from "@queries";
import {TRoutes} from "shared/types";

function ButtonApprove({id}) {
    const history = useHistory();
    const [ ApproveGuide ] = useMutation(queries.guides.APPROVE);

    const handleApprove = () => {
        ApproveGuide({variables: {id}}).then(({data}) => {
            const message = data && data.approveGuide;

            if (message) {
                toast.success(message);
                history.push(TRoutes.ADMIN_APPROVE);
            }
        }).catch(e => {});
    }

    return (
        <Button onClick={handleApprove} variant="contained" color="primary">
            Подтвердить
        </Button>
    )
}

ButtonApprove.propTypes = {
    id: PropTypes.string.isRequired
}

export default ButtonApprove;