import React, {lazy} from "react"

import Page from "pages/Page";

const LoginView = lazy(() => import('modules/auth/containers/LoginView/LoginView'));

export default function Login(props) {
    return (
        <Page maxWidth='xl'>
            <LoginView {...props} />
        </Page>
    )
}
