import React, {useEffect, useState} from "react";
import { useQuery } from "@apollo/client";
import { Paper } from "@material-ui/core";

import queries from "@queries";

import Layout from "modules/layout/containers/Layout/Layout";
import ListHeader from "modules/UI/components/ListHeader/ListHeader";
import FilterView from "../FilterView/FilterView";
import GuidesListView from "../GuidesListView/GuidesListView";
import {TRoutes} from "shared/types";

export default function GuidesView() {
    const [filterClass, setFilterClass] = useState('all');
    const [filterContent, setFilterContent] = useState('all');

    const { loading, data, refetch } = useQuery(queries.guides.GET_GUIDES, {
        variables: { filterClass, filterContent }
    });

    useEffect(() => {
        if (!loading) {
            refetch();
        }
    }, [])

    return (
        <Layout maxWidth="xl">
            <Paper>
                <ListHeader title="Guides & Strategy" link={TRoutes.GUIDES_SUBMIT} showButton={true} />

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