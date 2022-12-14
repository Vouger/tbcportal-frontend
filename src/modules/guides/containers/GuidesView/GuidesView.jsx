import React from "react";
import {useLazyQuery} from "@apollo/client";

import queries from "@queries";

import GuidesWrapper from "modules/guides/components/GuidesWrapper/GuidesWrapper";

function GuidesView() {
    const [ fetchQuery, { loading, data } ] = useLazyQuery(queries.guides.GET_GUIDES, {
        fetchPolicy: "no-cache"
    });

    return (
        <GuidesWrapper
            fetchQuery={fetchQuery}
            loading={loading}
            total={data && data.guides.total}
            list={data && data.guides.list}
        />
    )
}

export default GuidesView;