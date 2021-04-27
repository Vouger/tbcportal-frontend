import React from "react";
import {Pagination} from "@material-ui/lab";

import styles from "./GuidesPagination.module.scss";
import PropTypes from "prop-types";

function GuidesPagination(props) {
    const {page, pagesCount, setPage} = props;

    const handleChangePage = (event, value) => {
        setPage(value);
    }

    return (
        <Pagination page={page} count={pagesCount} onChange={handleChangePage} className={styles.root} />
    )
}

GuidesPagination.propTypes = {
    page: PropTypes.number.isRequired,
    pagesCount: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired
}

export default GuidesPagination;