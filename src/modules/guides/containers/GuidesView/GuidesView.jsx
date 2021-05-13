import React from "react";
import {useLazyQuery} from "@apollo/client";

import queries from "@queries";

import Layout from "modules/layout/containers/Layout/Layout";
import GuidesWrapper from "modules/guides/components/GuidesWrapper/GuidesWrapper";

function GuidesView() {
    const [ fetchQuery, { loading, data } ] = useLazyQuery(queries.guides.GET_GUIDES, {
        fetchPolicy: "no-cache"
    });

    return (
        <Layout maxWidth="xl">
            <GuidesWrapper
                fetchQuery={fetchQuery}
                loading={loading}
                total={data && data.guides.total}
                list={data && data.guides.list}
            />
        </Layout>
    )
}

export default GuidesView;