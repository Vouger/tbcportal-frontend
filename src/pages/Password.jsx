import React, {lazy} from "react";

import Page from "pages/Page";

const PasswordView = lazy(() => import('modules/auth/containers/PasswordView/PasswordView'));

export default function Password() {
    return (
        <Page maxWidth='xl'>
            <PasswordView />
        </Page>
    )
}
