import React from "react";
import { Grid } from "@material-ui/core";

import FilterButton from "../FilterButton/FilterButton";
import styles from './ContentFilter.module.scss'

export default function ContentFilter(props) {
    const {filterContent, setFilterContent} = props;

    const clickSelected = (value) => {
        setFilterContent(value)
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <FilterButton
                    title="All"
                    name="all"
                    selected={filterContent === 'all'}
                    setSelected={clickSelected}
                />
                <FilterButton
                    folder="content"
                    title="PVE"
                    name="pve"
                    selected={filterContent === 'pve'}
                    setSelected={clickSelected}
                />
                <FilterButton
                    folder="content"
                    title="PVP"
                    name="pvp"
                    selected={filterContent === 'pvp'}
                    setSelected={clickSelected}
                />
                <FilterButton
                    folder="content"
                    title="Leveling"
                    name="leveling"
                    selected={filterContent === 'leveling'}
                    setSelected={clickSelected}
                />
                <FilterButton
                    folder="content"
                    title="Lore"
                    name="lore"
                    selected={filterContent === 'lore'}
                    setSelected={clickSelected}
                />
            </Grid>
        </Grid>
    )
}