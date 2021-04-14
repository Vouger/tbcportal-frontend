import React from "react";

import Layout from "modules/layout/containers/Layout/Layout";
import TwitchTableContainer from "modules/admin/containers/TwitchTableContainer/TwitchTableContainer";

export default function AdminPanelView() {
    return (
        <Layout maxWidth="xl">
            <TwitchTableContainer />
        </Layout>
    )
}