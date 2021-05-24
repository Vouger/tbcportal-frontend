import React, {lazy} from "react";

import Page from "pages/Page";

const NewsView = lazy(() => import('modules/news/containers/NewsView/NewsView'));

export default function News() {
    return (
        <Page maxWidth='xl'>
            <NewsView />
        </Page>
    )
}
