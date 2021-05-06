import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {useQuery} from "@apollo/client";
import {LinearProgress, Paper} from "@material-ui/core";

import queries from "@queries";

import PostCard from "modules/landing/components/PostCard/PostCard";
import ListHeader from "modules/UI/components/ListHeader/ListHeader";
import {TRoutes} from "shared/types";

function PostsView({isAuth, role}) {
    const { loading, data } = useQuery(queries.posts.LIST);

    return (
        <Paper spacing={6}>
            <ListHeader title="Новости" link={TRoutes.ADD_POST} showButton={isAuth && role === "Admin"} />

            {loading ? <LinearProgress /> : ""}

            {!loading && data && data.posts.length === 0 ? "Ничего не найдено" : ""}

            {!loading && data && data.posts.map((item, i) => (
                <PostCard key={i} data={item} />
            ))}
        </Paper>
    )
}

const mapStateToProps = state => ({
    isAuth: state.user.isAuth,
    role: state.user.role
})

PostsView.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    role: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(PostsView)