import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";

export default function ConfirmationDialog(props) {
    const { confirmAction, cancelAction, value: valueProp, open, children, title, ...other } = props;

    return (
        <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            maxWidth="lg"
            aria-labelledby="confirmation-dialog-title"
            open={open}
            PaperProps={{
                style: {
                    backgroundColor: "#5b1a10"
                }
            }}
            {...other}
        >
            <DialogTitle id="confirmation-dialog-title">{title || 'Confirmation'}</DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>

            <DialogActions>
                <Button autoFocus onClick={cancelAction} color="secondary">
                    Cancel
                </Button>
                <Button onClick={() => confirmAction(valueProp)} color="secondary">
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    )
}