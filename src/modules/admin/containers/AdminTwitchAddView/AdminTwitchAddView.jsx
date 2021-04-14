import React from "react";

import Layout from "modules/layout/containers/Layout/Layout";
import TwitchForm from "modules/admin/components/TwitchForm/TwitchForm";

export default function AdminTwitchAddView() {
    return (
        <Layout maxWidth="sm">
            <TwitchForm />
        </Layout>
    )
}