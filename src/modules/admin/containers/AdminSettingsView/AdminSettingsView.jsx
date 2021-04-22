import React from "react";
import Layout from "modules/layout/containers/Layout/Layout";
import SettingsForm from "modules/admin/components/SettingsForm/SettingsForm";

export default function AdminSettingsView() {
    return (
        <Layout maxWidth="xl">
            <SettingsForm />
        </Layout>
    )
}