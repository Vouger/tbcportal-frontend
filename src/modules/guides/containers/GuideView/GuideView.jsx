import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import queries from "@queries";

import Layout from "modules/layout/containers/Layout/Layout";
import GuideWrapper from "modules/guides/components/GuideWrapper/GuideWrapper";

export default function GuideView() {
    const { id } = useParams()
    const { loading, data } = useQuery(queries.guides.GET_GUIDE, {
        variables: { id }
    });

    useEffect(() => {
        window.$WowheadPower.refreshLinks();
    })

    return (
        <Layout maxWidth="xl">
            {!loading && data ? <GuideWrapper guide={data.guide} /> : ""}
        </Layout>
    )
}