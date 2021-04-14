import React from "react";
import {Link} from "react-router-dom";
import {IconButton, Paper, Toolbar, Tooltip, Typography} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import {TRoutes} from "shared/types";
import TwitchTable from "modules/admin/components/TwitchTable/TwitchTable";
import styles from "./TwitchTableContainer.module.scss";

export default function TwitchTableContainer() {
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

            <TwitchTable />
        </Paper>
    )
}