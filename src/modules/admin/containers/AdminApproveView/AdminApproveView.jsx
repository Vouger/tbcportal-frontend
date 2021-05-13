import React from "react";

import Layout from "../../../layout/containers/Layout/Layout";
import {useLazyQuery} from "@apollo/client";
import queries from "../../../../@queries";
import GuidesWrapper from "modules/guides/components/GuidesWrapper/GuidesWrapper";

export default function AdminApproveView() {
    const [ fetchQuery, { loading, data } ] = useLazyQuery(queries.guides.ADMIN);

    return (
        <Layout maxWidth="xl">
            <GuidesWrapper
                fetchQuery={fetchQuery}
                loading={loading}
                total={data && data.adminGuides.total}
                list={data && data.adminGuides.list}
            />
        </Layout>
    )
}