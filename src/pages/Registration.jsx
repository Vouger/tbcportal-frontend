import React, {lazy} from "react";

import Page from "pages/Page";

const RegistrationView = lazy(() => import('modules/auth/containers/RegistrationView/RegistrationView'));

export default function Registration() {
    return (
        <Page maxWidth='xl'>
            <RegistrationView />
        </Page>
    )
}
