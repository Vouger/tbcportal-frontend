import React, {lazy} from "react";

import Page from "pages/Page";

const ProfileView = lazy(() => import('modules/profile/containers/ProfileView/ProfileView'));

export default function Profile() {
    return (
        <Page maxWidth='sm'>
            <ProfileView />
        </Page>
    )
}
