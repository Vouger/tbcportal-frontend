import React, {lazy} from "react";

import Page from "pages/Page";

const PostView = lazy(() => import('modules/post/containers/PostView/PostView'));

export default function Post() {
    return (
        <Page maxWidth='xl'>
            <PostView />
        </Page>
    )
}
