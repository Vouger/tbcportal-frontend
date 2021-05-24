import React, {lazy} from "react";

import Page from "pages/Page";

const ChangePasswordView = lazy(() => import('modules/auth/containers/ChangePasswordView/ChangePasswordView'));

export default function ChangePassword() {
    return (
        <Page maxWidth='xs'>
            <ChangePasswordView />
        </Page>
    )
}
