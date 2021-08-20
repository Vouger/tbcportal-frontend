import React, {useState} from "react";
import {toast} from "react-toastify";
import {useMutation} from "@apollo/client";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";

import {TRoutes} from "shared/types";
import queries from "@queries";
import StyledButton from "modules/UI/components/StyledButton/StyledButton";
import ConfirmationDialog from "modules/UI/components/ConfirmationDialog/ConfirmationDialog";

function ButtonDelete({id}) {
    const [open, setOpen] = useState(false);
    const history = useHistory();
    const [ HideGuide ] = useMutation(queries.posts.DELETE);

    const handleDelete = () => {
        setOpen(true);
    }

    const deletePost = (id) => {
        setOpen(false);

        HideGuide({variables: {id}}).then(({data}) => {
            const message = data && data.deletePost;

            if (message) {
                toast.success(message);
                history.push(TRoutes.NEWS);
            }
        }).catch(e => {});
    }

    return (
      <>
        <StyledButton fullWidth onClick={handleDelete}>
            Удалить
        </StyledButton>

        <ConfirmationDialog
            open={open}
            cancelAction={() => setOpen(false)}
            confirmAction={deletePost}
            value={id}
        >
            Удалить этот пост ?
        </ConfirmationDialog>
      </>
    )
}

ButtonDelete.propTypes = {
    id: PropTypes.string.isRequired
}

export default ButtonDelete;
