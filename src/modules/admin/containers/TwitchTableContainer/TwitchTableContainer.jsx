import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {IconButton, Paper, Toolbar, Tooltip, Typography} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import {TRoutes} from "shared/types";
import TwitchTable from "modules/admin/components/TwitchTable/TwitchTable";
import styles from "./TwitchTableContainer.module.scss";
import ConfirmationDialog from "modules/UI/components/ConfirmationDialog/ConfirmationDialog";
import {useMutation, useQuery} from "@apollo/client";
import queries from "@queries";
import {toast} from "react-toastify";

export default function TwitchTableContainer() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState();
    const { loading, data, refetch } = useQuery(queries.twitch.GET_ADMIN);
    const [ RemoveTwitchStream ] = useMutation(queries.twitch.REMOVE);

    useEffect(() => {
        if (!loading) {
            refetch();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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

        RemoveTwitchStream({variables: {id}}).then(response => {
            const message = response && response.data && response.data.removeTwitchStream;

            if (message) {
                refetch();
                toast.success(message);
            }
        }).catch(e => {});
    }

    return (
        <Paper>
            <Toolbar>
                <div class={styles.header}>
                    <Typography variant="h4" component="div">
                        Twitch streamers
                    </Typography>
                </div>
                <Tooltip title="Add">
                    <IconButton aria-label="Add" component={Link} to={TRoutes.ADD_TWITCH_ADMIN}>
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
        </Paper>
    )
}