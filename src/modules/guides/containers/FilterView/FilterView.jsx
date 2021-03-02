import React from "react";
import {Grid, Toolbar} from "@material-ui/core";

import ContentFilter from "../../components/ContentFilter/ContentFilter";
import ClassFilter from "../../components/ClassFilter/ClassFilter";
import styles from "./FilterView.module.scss";

export default function FilterView(props) {
    const {filterContent, setFilterContent, filterClass, setFilterClass} = props;

    return (
        <Toolbar component="nav" variant="dense" classes={{root: styles.root}}>
            <Grid container spacing={6}>
                <Grid item lg={2} xs={12} className={styles.content}>
                    <ContentFilter filterContent={filterContent} setFilterContent={setFilterContent} />
                </Grid>

                <Grid item lg={4} xs={12} className={styles.class}>
                    <ClassFilter filterClass={filterClass} setFilterClass={setFilterClass} />
                </Grid>
            </Grid>
        </Toolbar>
    )
}