import React, {useState} from "react";
import {Link} from "react-router-dom";
import {IconButton, Toolbar, Tooltip, Typography} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {toast} from "react-toastify";
import {useMutation, useQuery} from "@apollo/client";

import queries from "@queries";

import {TRoutes} from "shared/types";
import TwitchTable from "modules/admin/components/TwitchTable/TwitchTable";
import ConfirmationDialog from "modules/UI/components/ConfirmationDialog/ConfirmationDialog";
import StyledPaper from "modules/UI/components/StyledPaper/StyledPaper";

import styles from "./TwitchTableContainer.module.scss";

export default function TwitchTableContainer() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState();
    const { loading, data, refetch } = useQuery(queries.twitch.GET_ADMIN, {
        fetchPolicy: "no-cache"
    });
    const [ RemoveTwitchStream ] = useMutation(queries.twitch.REMOVE);

    const cancelAction = () => {
        setOpen(false);
        setValue('');
    }

    const handleDelete = (id) => {
        setOpen(true);
        setValue(id);
    }

    const deleteStream = (id) => {
        setOpen(false);
        setValue('');

        RemoveTwitchStream({variables: {id}}).then(({data}) => {
            const message = data && data.removeTwitchStream;

            if (message) {
                refetch();
                toast.success(message);
            }
        }).catch(e => {});
    }

    return (
        <StyledPaper>
            <Toolbar>
                <div className={styles.header}>
                    <Typography variant="h4" component="div">
                        Twitch streamers
                    </Typography>
                </div>
                <Tooltip title="Add">
                    <IconButton aria-label="Add" component={Link} to={TRoutes.ADD_STREAMER}>
                        <AddIcon />
                    </IconButton>
                </Tooltip>
            </Toolbar>

            {loading && "Loading..."}

            {!loading && data &&
                <TwitchTable handleDelete={handleDelete} data={data}/>
            }

            <ConfirmationDialog
                open={open}
                cancelAction={cancelAction}
                confirmAction={deleteStream}
                value={value}
            >
                Are you sure ?
            </ConfirmationDialog>
        </StyledPaper>
    )
}