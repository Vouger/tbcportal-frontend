import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Paper } from "@material-ui/core";

import Layout from "../../../UI/containers/Layout/Layout";
import FilterView from "../FilterView/FilterView";
import GuidesListView from "../GuidesListView/GuidesListView";
import GuidesHeaderView from "../GuidesHeaderView/GuidesHeaderView";
import { Queries } from "../../../../shared/queries";
import styles from './GuidesView.module.scss'

export default function GuidesView() {
    const [filterClass, setFilterClass] = useState('all');
    const [filterContent, setFilterContent] = useState('all');

    const { loading, data } = useQuery(Queries.GET_GUIDES, {
        variables: { filterClass }
    });

    return (
        <Layout maxWidth="xl">
            <Paper className={styles.root}>
                <GuidesHeaderView title="Guides & Strategy" />

                <FilterView
                    filterClass={filterClass}
                    setFilterClass={setFilterClass}
                    filterContent={filterContent}
                    setFilterContent={setFilterContent}
                />

                <GuidesListView loading={loading} data={data} />
            </Paper>
        </Layout>
    )
}