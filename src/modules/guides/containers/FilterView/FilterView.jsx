import React from "react";
import {Grid, Toolbar} from "@material-ui/core";

import FilterList from "modules/guides/components/FilterList/FilterList";
import {TGuidesFilter} from "shared/types";
import styles from "./FilterView.module.scss";
import PropTypes from "prop-types";

function FilterView(props) {
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
                        list={TGuidesFilter.CLASS}
                        folder="classes"
                    />
                </Grid>
            </Grid>
        </Toolbar>
    )
}

FilterView.propTypes = {
    filterContent: PropTypes.string.isRequired,
    setFilterContent: PropTypes.func.isRequired,
    filterClass: PropTypes.string.isRequired,
    setFilterClass: PropTypes.func.isRequired
}

export default FilterView;