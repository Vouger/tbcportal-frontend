import React, {lazy} from "react";

import Page from "pages/Page";

const AdminTwitchView = lazy(() => import('modules/admin/containers/AdminTwitchView/AdminTwitchView'));

export default function AdminTwitch() {
    return (
        <Page maxWidth='xl'>
            <AdminTwitchView />
        </Page>
    )
}
