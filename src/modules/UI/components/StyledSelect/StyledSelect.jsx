import React from "react";
import Select from "react-select";

import styles from './StyledSelect.module.scss'

function StyledSelect (props) {
    return (
        <Select
            className={styles.root}
            classNamePrefix="react-select"
            {...props}
        />
    )
}

export default StyledSelect;