import React from "react";
import {connect} from "react-redux";
import {Paper} from "@material-ui/core";

import {TPagination, TRoutes} from "shared/types";

import ListHeader from "modules/UI/components/ListHeader/ListHeader";
import PostsList from "modules/posts/components/PostsList/PostsList";
import MoreNewsButton from "modules/landing/components/MoreNewsButton/MoreNewsButton";

function LandingPostsWrapper(props) {
    const {list, total, loading, isAuth, role} = props;

    return (
        <Paper>
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

        </Paper>
    )
}

const mapStateToProps = state => ({
    isAuth: state.user.isAuth,
    role: state.user.role
})

export default connect(mapStateToProps)(LandingPostsWrapper);