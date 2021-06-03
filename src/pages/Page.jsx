import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";

import Layout from "modules/layout/containers/Layout/Layout";
import MetaTags from "modules/seo/components/MetaTags/MetaTags";

export default function Page(props) {
    const renderLoader = () => <LinearProgress />;

    return (
        <Layout maxWidth={props.maxWidth}>
            <MetaTags title={props.title} />
            <Suspense fallback={renderLoader()}>
                {props.children}
            </Suspense>
        </Layout>
    )
}