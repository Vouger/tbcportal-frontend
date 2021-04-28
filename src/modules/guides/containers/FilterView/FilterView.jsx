import React from "react";
import {Grid, Toolbar} from "@material-ui/core";

import FilterList from "modules/guides/components/FilterList/FilterList";
import OrderBox from "modules/guides/components/OrderBox/OrderBox";
import {TGuidesFilter} from "shared/types";
import styles from "./FilterView.module.scss";
import PropTypes from "prop-types";

function FilterView({variables, setVariables}) {

    const setFilterContent = (value) => {
        setVariables({...variables,
            filterContent: value
        });
    }

    const setFilterClass = (value) => {
        setVariables({...variables,
            filterClass: value
        });
    }

    const setOrderBy = (value) => {
        setVariables({...variables,
            orderBy: value
        });
    }

    return (
        <Toolbar component="nav" variant="dense" classes={{root: styles.root}}>
            <Grid container spacing={6}>
                <Grid item xl={2} lg={3} xs={12} className={styles.list}>
                    <FilterList
                        selected={variables.filterContent}
                        setSelected={setFilterContent}
                        list={TGuidesFilter.CONTENT}
                        folder="content"
                    />
                </Grid>

                <Grid item xl={4} lg={6} xs={12} className={styles.list}>
                    <FilterList
                        selected={variables.filterClass}
                        setSelected={setFilterClass}
                        list={TGuidesFilter.CLASS}
                        folder="classes"
                    />
                </Grid>

                <Grid item xl={2} lg={2} xs={12} className={styles.order}>
                    <OrderBox orderBy={variables.orderBy} setOrderBy={setOrderBy} />
                </Grid>
            </Grid>
        </Toolbar>
    )
}

FilterView.propTypes = {
    variables: PropTypes.string.isRequired,
    setVariables: PropTypes.func.isRequired
}

export default FilterView;