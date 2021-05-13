import React, {useState} from "react";

import Layout from "../../../layout/containers/Layout/Layout";
import {useQuery} from "@apollo/client";
import queries from "../../../../@queries";
import {TPagination} from "../../../../shared/types";
import {LinearProgress, Paper} from "@material-ui/core";
import GuidesListView from "../../../guides/containers/GuidesListView/GuidesListView";

export default function AdminApproveView() {
    const [ variables, setVariables ] = useState({
        take: TPagination.GUIDES_DEFAUT,
        skip: 0
    })

    const { loading, data } = useQuery(queries.guides.ADMIN, {
        variables,
        fetchPolicy: "no-cache"
    })

    return (
        <Layout maxWidth="xl">
            {
                loading
                    ? <LinearProgress />
                    : <GuidesListView data={data && data.adminGuides.list}/>
            }
        </Layout>
    )
}