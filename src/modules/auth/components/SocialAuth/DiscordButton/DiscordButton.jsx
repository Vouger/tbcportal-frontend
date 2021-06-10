import React from "react";

import DiscordIconLogin from "modules/UI/components/icons/DiscordIconLogin";
import SocialAuthButton from "modules/social/containers/SocialAuthButton/SocialAuthButton";
import { buildUrl } from "shared/helpers";

import styles from "./DiscordButton.module.scss"

export default function DiscordButton(props) {

    const getDiscordAuthUrl = () => {
        const data = {
            client_id: process.env.REACT_APP_CLIENT_ID,
            redirect_uri: process.env.REACT_APP_FRONTEND_URL + '/auth/discord/callback',
            response_type: 'code',
            scope: 'identify email'
        };

        return buildUrl(process.env.REACT_APP_DISCORD_URL, data);
    }

    return (
        <SocialAuthButton
            url={getDiscordAuthUrl()}
            handleLogin={props.handleLogin}
            source="discord"
            className={styles.root}
        >
            <DiscordIconLogin />
            Войти через Discord
        </SocialAuthButton>
    )
}