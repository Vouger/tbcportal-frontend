import React, {lazy} from "react";

import Page from "pages/Page";

const NewsView = lazy(() => import('modules/posts/containers/PostsView/PostsView'));

export default function Posts() {
    return (
        <Page maxWidth='xl' meta={{title :'Новости'}}>
            <NewsView />
        </Page>
    )
}
