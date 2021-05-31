import React from 'react';
import {Container, Typography} from "@material-ui/core";

import VkontakteIcon from "modules/UI/components/icons/VkontakteIcon";
import DiscordIcon from "modules/UI/components/icons/DiscordIcon";
import YoutubeIcon from "modules/UI/components/icons/YoutubeIcon";
import TwitterIcon from "modules/UI/components/icons/TwitterIcon";
import SocialButton from "modules/layout/components/SocialButton/SocialButton";

import styles from './Footer.module.scss'

function Footer() {
    return (
        <footer className={styles.root}>
            <Container maxWidth="xl">
                <Typography variant="body1">
                    Наши социальные сети:
                </Typography>

                <SocialButton href="https://vk.com">
                    <VkontakteIcon />
                </SocialButton>
                <SocialButton href="https://discord.com">
                    <DiscordIcon />
                </SocialButton>
                <SocialButton href="https://twitter.com">
                    <TwitterIcon />
                </SocialButton>
                <SocialButton href="https://youtube.com">
                    <YoutubeIcon />
                </SocialButton>
            </Container>
        </footer>
    );
}

export default Footer;