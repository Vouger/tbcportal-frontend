import React, {lazy} from "react";
import Page from "pages/Page";

const GuidesView = lazy(() => import('modules/guides/containers/GuidesView/GuidesView'));

export default function Guides() {
    return (
        <Page maxWidth='xl'>
            <GuidesView />
        </Page>
    )
}
