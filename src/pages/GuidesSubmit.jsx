
import React, {lazy} from "react";

import Page from "pages/Page";

const GuidesSubmitView = lazy(() => import('modules/guides/containers/GuidesSubmitView/GuidesSubmitView'));

export default function GuidesSubmit() {
    return (
        <Page maxWidth='xl'>
            <GuidesSubmitView />
        </Page>
    )
}
