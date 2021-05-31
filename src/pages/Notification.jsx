import React, {lazy} from "react";

import Page from "pages/Page";

const NotificationView = lazy(() => import('modules/auth/containers/NotificationView/NotificationView'));

export default function Notification() {
    return (
        <Page maxWidth='md'>
            <NotificationView />
        </Page>
    )
}
