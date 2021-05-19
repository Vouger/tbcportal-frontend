import React from "react";
import {Box, Paper} from "@material-ui/core";
import PropTypes from "prop-types";

import RawHtml from "modules/UI/components/RawHtml/RawHtml";
import DetailsHeader from "modules/guide/components/DetailsHeader/DetailsHeader";

import styles from "./GuideWrapper.module.scss";

function GuideWrapper({guide}) {
    return (
        <Paper className={styles[guide.className]}>
            <DetailsHeader guide={guide} />
            <Box className={styles.content}>
                <RawHtml>{guide.text}</RawHtml>
            </Box>
        </Paper>
    )
}

GuideWrapper.propTypes = {
    guide: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        className: PropTypes.string.isRequired,
        views: PropTypes.number.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        user: PropTypes.shape({
            nickname: PropTypes.string.isRequired
        })
    })
}

export default GuideWrapper;