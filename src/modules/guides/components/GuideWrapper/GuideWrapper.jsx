import React from "react";
import {Box, Grid, Paper} from "@material-ui/core";
import DetailsHeader from "modules/guides/containers/DetailsHeader/DetailsHeader";
import RawHtml from "modules/UI/components/RawHtml/RawHtml";
import PropTypes from "prop-types";

import styles from "./GuideWrapper.module.scss";

function GuideWrapper({guide}) {
    return (
        <Paper className={styles[guide.className]}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <DetailsHeader guide={guide} />
                </Grid>
                <Grid item xs={12}>
                    <Box className={styles.content}>
                        <RawHtml>{guide.text}</RawHtml>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}

GuideWrapper.propTypes = {
    guide: PropTypes.object.isRequired
}

export default GuideWrapper;