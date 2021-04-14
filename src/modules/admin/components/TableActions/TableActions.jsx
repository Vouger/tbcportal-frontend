import React, {useState} from "react";
import {Link} from "react-router-dom";
import {IconButton, Menu, MenuItem} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';

import {TRoutes} from "shared/types";

export default function TableActions (props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const { id } = props;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = () => {
        handleClose();
        props.handleDelete(id);
    };

    return (
        <>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        backgroundColor: "#5b1a10"
                    }
                }}
            >
                <MenuItem key="edit" component={Link} to={TRoutes.EDIT_TWITCH_ADMIN(id)}>
                    Edit
                </MenuItem>

                <MenuItem key="deleted" onClick={handleDelete}>
                    Delete
                </MenuItem>
            </Menu>
        </>
    )
}