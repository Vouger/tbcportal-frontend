import React, {lazy} from "react";

import Page from "pages/Page";

const AdminApproveView = lazy(() => import('modules/admin/containers/AdminApproveView/AdminApproveView'));

export default function AdminApprove() {
    return (
        <Page maxWidth='xl'>
            <AdminApproveView />
        </Page>
    )
}