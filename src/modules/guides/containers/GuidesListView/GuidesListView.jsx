import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

import GuideCard from "../../components/GuideCard/GuideCard";
import styles from "./GuidesListView.module.scss";

function GuidesListView(props) {
    const {data} = props;

    return (
        <Grid container spacing={3} className={styles.root}>
            {data && data.length === 0 ? "Ничего не найдено" : ""}

            {data && data.map((item, i) => (
                <Grid key={i} item xl={2} lg={3} sm={6} md={6} xs={12}>
                    <GuideCard guide={item} />
                </Grid>
            ))}
        </Grid>
    )
}

GuidesListView.propTypes = {
    data: PropTypes.array.isRequired
}

export default GuidesListView;