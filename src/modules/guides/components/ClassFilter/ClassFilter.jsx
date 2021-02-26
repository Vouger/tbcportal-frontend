import React, {useState} from "react";
import {Grid} from "@material-ui/core";

import FilterButton from "../FilterButton/FilterButton";
import styles from './ClassFilter.module.scss'

export default function ClassFilter() {
    const [selected, setSelected] = useState('all');

    const clickSelected = (value) => {
        setSelected(value)
    }

    return (
        <Grid container>
            <Grid item lg={6} xs={12}>
                <FilterButton title="All" name="all" selected={selected === 'all'} setSelected={clickSelected} />
                <FilterButton title="Druid" name="druid" selected={selected === 'druid'} setSelected={clickSelected} />
                <FilterButton title="Hunter" name="hunter" selected={selected === 'hunter'} setSelected={clickSelected} />
                <FilterButton title="Mage" name="mage" selected={selected === 'mage'} setSelected={clickSelected} />
                <FilterButton title="Paladin" name="paladin" selected={selected === 'paladin'} setSelected={clickSelected} />
            </Grid>

            <Grid item lg={6} xs={12}>
                <FilterButton title="Priest" name="priest" selected={selected === 'priest'} setSelected={clickSelected} />
                <FilterButton title="Rogue" name="rogue" selected={selected === 'rogue'} setSelected={clickSelected} />
                <FilterButton title="Shaman" name="shaman" selected={selected === 'shaman'} setSelected={clickSelected} />
                <FilterButton title="Warlock" name="warlock" selected={selected === 'warlock'} setSelected={clickSelected} />
                <FilterButton title="Warrior" name="warrior" selected={selected === 'warrior'} setSelected={clickSelected} />
            </Grid>
        </Grid>
    )
}