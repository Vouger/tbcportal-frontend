import React from "react";

import { Grid } from "@material-ui/core";
import GuideCard from "../../components/GuideCard/GuideCard";
import styles from "./GuidesListView.module.scss";

export default function GuidesListView(props) {
    const {loading, data} = props;

    return (
        <Grid container spacing={3} className={styles.root}>
            {loading ? "Loading..." : ""}

            {!loading && data && data.guides.length === 0 ? "Nothing found" : ""}

            {!loading && data && data.guides.map((item) => (
                <Grid item xl={2} lg={3} sm={6} md={6} xs={12}>
                    <GuideCard guide={item} />
                </Grid>
            ))}
        </Grid>
    )
}