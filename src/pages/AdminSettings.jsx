import React, {lazy} from "react";
import Page from "pages/Page";

const AdminSettingsView = lazy(() => import('modules/admin/containers/AdminSettingsView/AdminSettingsView'));

export default function AdminSettings() {
    return (
        <Page maxWidth='xl'>
            <AdminSettingsView />
        </Page>
    )
}