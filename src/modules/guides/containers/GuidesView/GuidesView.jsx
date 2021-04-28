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
    const [ variables, setVariables ] = useState({
        filterClass: 'all',
        filterContent: 'all',
        orderBy: '',
        keyword: '',
        take: TPagination.GUIDES_DEFAUT,
        skip: 0
    })

    const [page, setPage] = useState(1);
    const [pagesCount, setPagesCount] = useState(1);

    const { loading, data } = useQuery(queries.guides.GET_GUIDES, {
        variables,
        fetchPolicy: "no-cache"
    });

    useEffect(() => {
        switch (props.width) {
            case 'xs':
            case 'sm':
                setVariables({...variables,
                    take: TPagination.GUIDES_SM
                });
                break;
            case 'lg':
                setVariables({...variables,
                    take: TPagination.GUIDES_LG
                });
                break;
            default:
                setVariables({...variables,
                    take: TPagination.GUIDES_DEFAUT
                });
                break;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.width])

    useEffect(() => {
        setPagesCount(data ? Math.ceil(data.guides.total / variables.take) : 1);
    }, [variables.take, data])

    useEffect(() => {
        setVariables({...variables,
            skip: 0
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [variables.filterClass, variables.filterContent, variables.take])

    useEffect(() => {
        setVariables({...variables,
            skip: (page - 1)  * variables.take
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    return (
        <Layout maxWidth="xl">
            <Paper>
                <ListHeader title="Guides & Strategy" link={TRoutes.ADD_GUIDE} showButton={true} />

                <FilterView
                    variables={variables}
                    setVariables={setVariables}
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