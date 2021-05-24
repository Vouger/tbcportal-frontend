import React, {lazy} from "react";

import Page from "pages/Page";

const LandingView = lazy(() => import('modules/landing/containers/LandingView/LandingView'));

export default function Landing() {
    return (
        <Page maxWidth='xl'>
            <LandingView />
        </Page>
    )
}
