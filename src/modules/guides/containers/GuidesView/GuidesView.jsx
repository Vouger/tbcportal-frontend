import React, {useEffect, useState} from "react";
import { useQuery } from "@apollo/client";
import {LinearProgress, Paper, withWidth} from "@material-ui/core";

import queries from "@queries";

import Layout from "modules/layout/containers/Layout/Layout";
import ListHeader from "modules/UI/components/ListHeader/ListHeader";
import GuidesPagination from "modules/guides/components/GuidesPagination/GuidesPagination";
import FilterView from "../FilterView/FilterView";
import GuidesListView from "../GuidesListView/GuidesListView";
import {TPagination, TRoutes} from "shared/types";

function GuidesView(props) {
    const [filterClass, setFilterClass] = useState('all');
    const [filterContent, setFilterContent] = useState('all');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(TPagination.GUIDES_DEFAUT);
    const [pagesCount, setPagesCount] = useState(1);

    const { loading, data } = useQuery(queries.guides.GET_GUIDES, {
        variables: {
            filterClass,
            filterContent,
            take: limit,
            skip: (page - 1)  * limit
        },
        fetchPolicy: "no-cache"
    });

    useEffect(() => {
        switch (props.width) {
            case 'xs':
            case 'sm':
                setLimit(TPagination.GUIDES_SM);
                break;
            case 'lg':
                setLimit(TPagination.GUIDES_LG);
                break;
            default:
                setLimit(TPagination.GUIDES_DEFAUT);
                break;
        }
    }, [props.width])

    useEffect(() => {
        setPagesCount(data ? Math.ceil(data.guides.total / limit) : 1);
    }, [limit, data])

    useEffect(() => {
        setPage(1);
    }, [filterClass, filterContent, limit])

    return (
        <Layout maxWidth="xl">
            <Paper>
                <ListHeader title="Guides & Strategy" link={TRoutes.ADD_GUIDE} showButton={true} />

                <FilterView
                    filterClass={filterClass}
                    setFilterClass={setFilterClass}
                    filterContent={filterContent}
                    setFilterContent={setFilterContent}
                />

                {
                    loading
                    ? <LinearProgress />
                    : <GuidesListView data={data && data.guides.list}/>
                }

                {
                    pagesCount > 1
                        ? <GuidesPagination page={page} pagesCount={pagesCount} setPage={setPage} />
                        : ""
                }
            </Paper>
        </Layout>
    )
}

export default withWidth()(GuidesView);