import React from "react";
import {useQuery} from "@apollo/client";
import {Grid, Paper} from "@material-ui/core";

import queries from "@queries";

import PostCard from "modules/landing/components/PostCard/PostCard";
import TwitchView from "modules/landing/containers/TwitchView/TwitchView";
import ListHeader from "modules/UI/components/ListHeader/ListHeader";
import {TRoutes} from "shared/types";
import {connect} from "react-redux";

function NewsView({isAuth, role}) {
    const { loading, data } = useQuery(queries.posts.LIST);

    return (
        <Grid container spacing={6}>
            <Grid item lg={9} xs={12}>
                <Paper>
                    <ListHeader title="Новости" link={TRoutes.ADD_POST} showButton={isAuth && role === "Admin"} />

                    {!loading && data && data.posts.map((item, i) => (
                        <PostCard key={i} data={item} />
                    ))}
                </Paper>
            </Grid>
            <Grid item lg={3} xs={12}>
                <TwitchView />
            </Grid>
        </Grid>
    )
}

const mapStateToProps = state => ({
    isAuth: state.user.isAuth,
    role: state.user.role
})

export default connect(mapStateToProps)(NewsView)