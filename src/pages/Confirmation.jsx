import React, {lazy} from "react";

import Page from "pages/Page";

const ConfirmationView = lazy(() => import('modules/auth/containers/ConfirmationView/ConfirmationView'));

export default function Confirmation() {
    return (
        <Page maxWidth='md'>
            <ConfirmationView />
        </Page>
    )
}
