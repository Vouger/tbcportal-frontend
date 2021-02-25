import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";

import styles from "../../containers/Layout/Layout.module.scss";

export default function ConfirmationDialog(props) {
    const { confirmAction, cancelAction, value: valueProp, open, children, title, ...other } = props;

    return (
        <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            maxWidth="lg"
            aria-labelledby="confirmation-dialog-title"
            open={open}
            {...other}
        >
            <DialogTitle id="confirmation-dialog-title">{title || 'Confirmation'}</DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>

            <DialogActions>
                <Button autoFocus onClick={cancelAction} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => confirmAction(valueProp)} color="primary">
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    )
}