import React, {lazy} from "react";

import Page from "pages/Page";

const GuideView = lazy(() => import('modules/guide/containers/GuideView/GuideView'));

export default function Guide() {
    return (
        <Page maxWidth='xl' meta={{wowhead : true}}>
            <GuideView />
        </Page>
    )
}
