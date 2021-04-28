import React from "react";
import {Grid, Hidden, Toolbar} from "@material-ui/core";
import PropTypes from "prop-types";

import FilterList from "modules/guides/components/FilterList/FilterList";
import OrderBox from "modules/guides/components/OrderBox/OrderBox";
import SearchBox from "modules/guides/components/SearchBox/SearchBox";
import {TGuidesFilter} from "shared/types";
import styles from "./FilterView.module.scss";

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

    const setKeyword = (value) => {
        setVariables({...variables,
            keyword: value
        });
    }

    return (
        <Toolbar component="nav" variant="dense" classes={{root: styles.root}}>
            <Grid container spacing={1} className={styles.grid}>
                <Hidden smDown>
                    <Grid item xl={6} lg={12} md={12} className={styles.list}>
                        <FilterList
                            selected={variables.filterContent}
                            setSelected={setFilterContent}
                            list={TGuidesFilter.CONTENT}
                            folder="content"
                            margin={true}
                        />
                        <FilterList
                            selected={variables.filterClass}
                            setSelected={setFilterClass}
                            list={TGuidesFilter.CLASS}
                            folder="classes"
                        />
                    </Grid>
                </Hidden>

                <Hidden mdUp>
                    <Grid item xs={12} className={styles.list}>
                        <FilterList
                            selected={variables.filterContent}
                            setSelected={setFilterContent}
                            list={TGuidesFilter.CONTENT}
                            folder="content"
                        />
                    </Grid>
                    <Grid item xs={12} className={styles.list}>
                        <FilterList
                            selected={variables.filterClass}
                            setSelected={setFilterClass}
                            list={TGuidesFilter.CLASS}
                            folder="classes"
                        />
                    </Grid>
                </Hidden>

                <Grid item xl={2} lg={3} md={5} xs={12} className={styles.order}>
                    <OrderBox orderBy={variables.orderBy} setOrderBy={setOrderBy} />
                </Grid>

                <Grid item xl={3} lg={5} md={7} xs={12} className={styles.search}>
                    <SearchBox setKeyword={setKeyword} />
                </Grid>
            </Grid>
        </Toolbar>
    )
}

FilterView.propTypes = {
    variables: PropTypes.object.isRequired,
    setVariables: PropTypes.func.isRequired
}

export default FilterView;