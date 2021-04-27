import React from "react";
import {Grid, Toolbar} from "@material-ui/core";

import FilterList from "modules/guides/components/FilterList/FilterList";
import {TGuidesFilter} from "shared/types";
import styles from "./FilterView.module.scss";

export default function FilterView(props) {
    const {filterContent, setFilterContent, filterClass, setFilterClass} = props;

    return (
        <Toolbar component="nav" variant="dense" classes={{root: styles.root}}>
            <Grid container spacing={6}>
                <Grid item xl={2} lg={3} xs={12} className={styles.list}>
                    <FilterList
                        selected={filterContent}
                        setSelected={setFilterContent}
                        list={TGuidesFilter.CONTENT}
                        folder="content"
                    />
                </Grid>

                <Grid item xl={4} lg={6} xs={12} className={styles.list}>
                    <FilterList
                        selected={filterClass}
                        setSelected={setFilterClass}
                        list={TGuidesFilter.CLASS_LINE1}
                        folder="classes"
                    />
                    <FilterList
                        selected={filterClass}
                        setSelected={setFilterClass}
                        list={TGuidesFilter.CLASS_LINE2}
                        folder="classes"
                    />
                </Grid>
            </Grid>
        </Toolbar>
    )
}