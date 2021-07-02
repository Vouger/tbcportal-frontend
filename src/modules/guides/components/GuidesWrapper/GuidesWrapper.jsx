import React, {useEffect, useState} from "react";
import {LinearProgress, withWidth} from "@material-ui/core";

import ListHeader from "modules/UI/components/ListHeader/ListHeader";
import FilterView from "modules/guides/components/FilterView/FilterView";
import GuidesList from "modules/guides/components/GuidesList/GuidesList";
import GuidesPagination from "modules/guides/components/GuidesPagination/GuidesPagination";
import StyledPaper from "modules/UI/components/StyledPaper/StyledPaper";

import {TPagination, TRoutes} from "shared/types";

function GuidesWrapper(props) {
    const [ variables, setVariables ] = useState({
        filterClass: 'all',
        filterContent: 'all',
        orderBy: '',
        keyword: '',
        take: TPagination.GUIDES_DEFAULT,
        page: 1
    })
    const [pagesCount, setPagesCount] = useState(1);
    const {fetchQuery, loading, list, total, width} = props;

    const setPage = (value) => {
        setVariables({...variables,
            page: value
        });
    }

    useEffect(() => {
        fetchQuery({variables})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [variables])

    useEffect(() => {
        switch (width) {
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
                    take: TPagination.GUIDES_DEFAULT
                });
                break;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width])

    useEffect(() => {
        setPagesCount(total ? Math.ceil(total / variables.take) : 1);
    }, [variables.take, total])

    useEffect(() => {
        setPage(1)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [variables.filterClass, variables.filterContent, variables.keyword, variables.take])

    return (
        <StyledPaper>
            <ListHeader title="Гайды" link={TRoutes.ADD_GUIDE} showButton={true} />

            <FilterView
                variables={variables}
                setVariables={setVariables}
            />

            {
                loading
                    ? <LinearProgress />
                    : <GuidesList data={list || []}/>
            }

            {
                pagesCount > 1
                    ? <GuidesPagination page={variables.page} pagesCount={pagesCount} setPage={setPage} />
                    : ""
            }
        </StyledPaper>
    )
}

export default withWidth()(GuidesWrapper);