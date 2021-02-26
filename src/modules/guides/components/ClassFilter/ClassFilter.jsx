import React, {useState} from "react";

import styles from './ClassFilter.module.scss'
import FilterButton from "../FilterButton/FilterButton";

export default function ClassFilter() {
    const [selected, setSelected] = useState('');

    const clickSelected = (value) => {
        setSelected(value)
    }

    return (
        <>
            <FilterButton title="Druid" name="druid" selected={selected === 'druid'} setSelected={clickSelected} />
            <FilterButton title="Hunter" name="hunter" selected={selected === 'hunter'} setSelected={clickSelected} />
            <FilterButton title="Mage" name="mage" selected={selected === 'mage'} setSelected={clickSelected} />
            <FilterButton title="Paladin" name="paladin" selected={selected === 'paladin'} setSelected={clickSelected} />
            <FilterButton title="Priest" name="priest" selected={selected === 'priest'} setSelected={clickSelected} />
            <FilterButton title="Rogue" name="rogue" selected={selected === 'rogue'} setSelected={clickSelected} />
            <FilterButton title="Shaman" name="shaman" selected={selected === 'shaman'} setSelected={clickSelected} />
            <FilterButton title="Warlock" name="warlock" selected={selected === 'warlock'} setSelected={clickSelected} />
            <FilterButton title="Warrior" name="warrior" selected={selected === 'warrior'} setSelected={clickSelected} />
        </>
    )
}