import React from "react";

import Layout from "../../../layout/containers/Layout/Layout";
import ProfileForm from "../../components/ProfileForm/ProfileForm";

export default function ProfileView() {
    return (
        <Layout maxWidth="sm">
            <ProfileForm />
        </Layout>
    )
}