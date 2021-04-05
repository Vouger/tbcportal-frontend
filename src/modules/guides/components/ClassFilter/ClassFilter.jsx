import React from "react";
import { Grid } from "@material-ui/core";

import FilterButton from "../FilterButton/FilterButton";

export default function ClassFilter(props) {
    const {filterClass, setFilterClass} = props;

    const clickSelected = (value) => {
        setFilterClass(value)
    }

    return (
        <Grid container>
            <Grid item lg={12} xl={6} md={12} xs={12}>
                <FilterButton
                    title="All"
                    name="all"
                    selected={filterClass === 'all'}
                    setSelected={clickSelected}
                />
                <FilterButton
                    title="Druid"
                    name="druid"
                    folder="classes"
                    selected={filterClass === 'druid'}
                    setSelected={clickSelected}
                />
                <FilterButton
                    title="Hunter"
                    name="hunter"
                    folder="classes"
                    selected={filterClass === 'hunter'}
                    setSelected={clickSelected}
                />
                <FilterButton
                    title="Mage"
                    name="mage"
                    folder="classes"
                    selected={filterClass === 'mage'}
                    setSelected={clickSelected}
                />
                <FilterButton
                    title="Paladin"
                    name="paladin"
                    folder="classes"
                    selected={filterClass === 'paladin'}
                    setSelected={clickSelected}
                />
            </Grid>

            <Grid item lg={12} xl={6} md={12} xs={12}>
                <FilterButton
                    title="Priest"
                    name="priest"
                    folder="classes"
                    selected={filterClass === 'priest'}
                    setSelected={clickSelected}
                />
                <FilterButton
                    title="Rogue"
                    name="rogue"
                    folder="classes"
                    selected={filterClass === 'rogue'}
                    setSelected={clickSelected}
                />
                <FilterButton
                    title="Shaman"
                    name="shaman"
                    folder="classes"
                    selected={filterClass === 'shaman'}
                    setSelected={clickSelected}
                />
                <FilterButton
                    title="Warlock"
                    name="warlock"
                    folder="classes"
                    selected={filterClass === 'warlock'}
                    setSelected={clickSelected}
                />
                <FilterButton
                    title="Warrior"
                    name="warrior"
                    folder="classes"
                    selected={filterClass === 'warrior'}
                    setSelected={clickSelected}
                />
            </Grid>
        </Grid>
    )
}