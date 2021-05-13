import React from "react";
import {Box, Paper} from "@material-ui/core";
import PropTypes from "prop-types";

import RawHtml from "modules/UI/components/RawHtml/RawHtml";
import DetailsHeader from "modules/guide/components/DetailsHeader/DetailsHeader";
import styles from "modules/guide/components/GuideWrapper/GuideWrapper.module.scss";

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