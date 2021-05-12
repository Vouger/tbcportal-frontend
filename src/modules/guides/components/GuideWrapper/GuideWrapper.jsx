import React from "react";
import {Box, Paper} from "@material-ui/core";
import DetailsHeader from "modules/guides/containers/DetailsHeader/DetailsHeader";
import RawHtml from "modules/UI/components/RawHtml/RawHtml";
import PropTypes from "prop-types";

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
    guide: PropTypes.object.isRequired
}

export default GuideWrapper;