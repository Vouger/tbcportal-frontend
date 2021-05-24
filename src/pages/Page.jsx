import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";

import Layout from "modules/layout/containers/Layout/Layout";

export default function Page(props) {
    const renderLoader = () => <LinearProgress />;

    return (
        <Layout maxWidth={props.maxWidth}>
            <Suspense fallback={renderLoader()}>
                {props.children}
            </Suspense>
        </Layout>
    )
}