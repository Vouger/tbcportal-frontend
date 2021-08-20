import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import {TPagination, TRoutes} from "shared/types";

import ListHeader from "modules/UI/components/ListHeader/ListHeader";
import PostsList from "modules/posts/components/PostsList/PostsList";
import GuidesPagination from "modules/guides/components/GuidesPagination/GuidesPagination";
import StyledPaper from "modules/UI/components/StyledPaper/StyledPaper";

function PostsWrapper(props) {
    const {isAuth, role, loading, list, total, fetchQuery} = props;

    const [pagesCount, setPagesCount] = useState(1);
    const [ variables, setVariables ] = useState({
        take: TPagination.POSTS_DEFAULT,
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
        fetchQuery({variables})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setPagesCount(total ? Math.ceil(total / variables.take) : 1);
    }, [variables.take, total])

    return (
        <StyledPaper>
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
        </StyledPaper>
    )
}

const mapStateToProps = state => ({
    isAuth: state.user.isAuth,
    role: state.user.role
})

export default connect(mapStateToProps)(PostsWrapper);
