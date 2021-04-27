import React from "react";

import FilterButton from "../FilterButton/FilterButton";

export default function FilterList(props) {
    const {folder, list, selected, setSelected} = props;

    const clickSelected = (value) => {
        setSelected(value)
    }

    return (
        <>
            {list.map((item) => {
                return (
                    <FilterButton
                        key={item.title}
                        title={item.title}
                        name={item.name}
                        folder={folder}
                        selected={selected === item.name}
                        setSelected={clickSelected}
                    />
                )
            })}
        </>
    )
}