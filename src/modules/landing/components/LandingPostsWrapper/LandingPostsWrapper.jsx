import React from "react";
import {connect} from "react-redux";

import {TPagination, TRoutes} from "shared/types";

import ListHeader from "modules/UI/components/ListHeader/ListHeader";
import PostsList from "modules/posts/components/PostsList/PostsList";
import MoreNewsButton from "modules/landing/components/MoreNewsButton/MoreNewsButton";
import StyledPaper from "modules/UI/components/StyledPaper/StyledPaper";

function LandingPostsWrapper(props) {
    const {list, total, loading, isAuth, role} = props;

    return (
        <StyledPaper>
            <ListHeader title="Новости" link={TRoutes.ADD_POST} showButton={isAuth && role === "Admin"} />

            {!loading && list && list.length === 0 ? "Ничего не найдено" : ""}

            {!loading && list
                ? <PostsList list={list}/>
                : ''
            }

            {total > TPagination.POSTS_LANDING
                ? <MoreNewsButton />
                : ''
            }

        </StyledPaper>
    )
}

const mapStateToProps = state => ({
    isAuth: state.user.isAuth,
    role: state.user.role
})

export default connect(mapStateToProps)(LandingPostsWrapper);