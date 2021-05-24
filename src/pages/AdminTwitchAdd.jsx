import React, {lazy} from "react";

import Page from "pages/Page";

const AdminTwitchAddView = lazy(() => import('modules/admin/containers/AdminTwitchAddView/AdminTwitchAddView'));

export default function AdminTwitchAdd() {
    return (
        <Page maxWidth='xl'>
            <AdminTwitchAddView />
        </Page>
    )

}
