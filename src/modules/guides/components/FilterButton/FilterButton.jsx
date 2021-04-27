import React from "react";
import clsx from "clsx";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

import styles from './FilterButton.module.scss'
import ClassAvatar from "../ClassAvatar/ClassAvatar";

function FilterButton(props) {
    const {title, folder, name, selected} = props;

    const handleClick = () => {
        props.setSelected && props.setSelected(props.name);
    }

    return (
        <Button
            classes={{label: styles.label}}
            className={clsx(styles.button, selected && styles.selected)}
            onClick={handleClick}
            disableFocusRipple={true}
        >
            <ClassAvatar title={title} folder={folder} name={name} />
            {title}
        </Button>
    )
}

FilterButton.propTypes = {
    title: PropTypes.string.isRequired,
    folder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired
}

export default FilterButton;