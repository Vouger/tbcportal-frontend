import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {useQuery} from "@apollo/client";
import {LinearProgress, Paper} from "@material-ui/core";

import queries from "@queries";

import ListHeader from "modules/UI/components/ListHeader/ListHeader";
import {TRoutes} from "shared/types";
import PostsList from "modules/posts/components/PostsList/PostsList";

function LandingPostsView({isAuth, role}) {
    const { loading, data } = useQuery(queries.posts.LIST);

    return (
        <Paper>
            <ListHeader title="Новости" link={TRoutes.ADD_POST} showButton={isAuth && role === "Admin"} />

            {loading ? <LinearProgress /> : ""}

            {!loading && data && data.posts.list.length === 0 ? "Ничего не найдено" : ""}

            {!loading && data && data.posts
                ? <PostsList list={data.posts.list} />
                : ''
            }
        </Paper>
    )
}

const mapStateToProps = state => ({
    isAuth: state.user.isAuth,
    role: state.user.role
})

LandingPostsView.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    role: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(LandingPostsView)