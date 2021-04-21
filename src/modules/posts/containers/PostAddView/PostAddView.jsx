import React from "react";

import Layout from "modules/layout/containers/Layout/Layout";
import PostForm from "modules/posts/components/PostForm/PostForm";

export default function PostAddView() {
    return (
        <Layout maxWidth="xl">
            <PostForm />
        </Layout>
    )
}
