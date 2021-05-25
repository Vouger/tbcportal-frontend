import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Paper} from "@material-ui/core";

import {TPagination, TRoutes} from "shared/types";

import ListHeader from "modules/UI/components/ListHeader/ListHeader";
import PostsList from "modules/posts/components/PostsList/PostsList";
import GuidesPagination from "modules/guides/components/GuidesPagination/GuidesPagination";

function PostsWrapper(props) {
    const {isAuth, role, loading, list, total, fetchQuery} = props;

    const [pagesCount, setPagesCount] = useState(1);
    const [ variables, setVariables ] = useState({
        take: 2,
        page: 1
    })

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
        setPagesCount(total ? Math.ceil(total / variables.take) : 1);
    }, [variables.take, total])

    return (
        <Paper>
            <ListHeader title="Новости" link={TRoutes.ADD_POST} showButton={isAuth && role === "Admin"} />

            {!loading && list
                ? <PostsList list={list} />
                : ''
            }

            {
                pagesCount > 1
                    ? <GuidesPagination page={variables.page} pagesCount={pagesCount} setPage={setPage} />
                    : ""
            }
        </Paper>
    )
}

const mapStateToProps = state => ({
    isAuth: state.user.isAuth,
    role: state.user.role
})

export default connect(mapStateToProps)(PostsWrapper);