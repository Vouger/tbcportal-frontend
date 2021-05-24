import React, {lazy} from "react";

import Page from "pages/Page";

const PostAddView = lazy(() => import('modules/posts/containers/PostAddView/PostAddView'));

export default function PostAdd() {
    return (
        <Page maxWidth='xl'>
            <PostAddView />
        </Page>
    )
}
