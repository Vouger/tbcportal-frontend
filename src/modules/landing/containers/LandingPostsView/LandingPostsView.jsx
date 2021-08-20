import React from "react";
import PropTypes from "prop-types";
import {useQuery} from "@apollo/client";

import queries from "@queries";

import {TPagination} from "shared/types";
import LandingPostsWrapper from "modules/landing/components/LandingPostsWrapper/LandingPostsWrapper";

function LandingPostsView() {
    const { loading, data } = useQuery(queries.posts.LIST, {
        fetchPolicy: "network-only",
        variables: {
            take: TPagination.POSTS_LANDING
        }
    });

    return (
        <LandingPostsWrapper
            list={data?.posts?.list}
            total={data?.posts?.total}
            loading={loading}
        />
    )
}

LandingPostsView.propTypes = {
    isAuth: PropTypes.bool,
    role: PropTypes.string
}

export default LandingPostsView;
