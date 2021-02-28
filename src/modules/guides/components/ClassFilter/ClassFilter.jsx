import React from "react";
import { Grid } from "@material-ui/core";

import FilterButton from "../FilterButton/FilterButton";
import styles from './ClassFilter.module.scss'

export default function ClassFilter(props) {
    const {filterClass, setFilterClass} = props;

    const clickSelected = (value) => {
        setFilterClass(value)
    }

    return (
        <Grid container>
            <Grid item lg={12} xl={6} md={12} xs={12}>
                <FilterButton title="All" name="all" selected={filterClass === 'all'} setSelected={clickSelected} />
                <FilterButton title="Druid" name="druid" selected={filterClass === 'druid'} setSelected={clickSelected} />
                <FilterButton title="Hunter" name="hunter" selected={filterClass === 'hunter'} setSelected={clickSelected} />
                <FilterButton title="Mage" name="mage" selected={filterClass === 'mage'} setSelected={clickSelected} />
                <FilterButton title="Paladin" name="paladin" selected={filterClass === 'paladin'} setSelected={clickSelected} />
            </Grid>

            <Grid item lg={12} xl={6} md={12} xs={12}>
                <FilterButton title="Priest" name="priest" selected={filterClass === 'priest'} setSelected={clickSelected} />
                <FilterButton title="Rogue" name="rogue" selected={filterClass === 'rogue'} setSelected={clickSelected} />
                <FilterButton title="Shaman" name="shaman" selected={filterClass === 'shaman'} setSelected={clickSelected} />
                <FilterButton title="Warlock" name="warlock" selected={filterClass === 'warlock'} setSelected={clickSelected} />
                <FilterButton title="Warrior" name="warrior" selected={filterClass === 'warrior'} setSelected={clickSelected} />
            </Grid>
        </Grid>
    )
}