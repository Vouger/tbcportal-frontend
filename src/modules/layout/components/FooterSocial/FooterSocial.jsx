import React from "react";
import {Container} from "@material-ui/core";

import DiscordIcon from "assets/social/discord.png";

import SocialButton from "modules/layout/components/SocialButton/SocialButton";

import styles from "./FooterSocial.module.scss";

export default function FooterSocial() {
    return (
        <div className={styles.root}>
            <Container maxWidth="xl" className={styles.container}>
                <div className={styles.title}>
                    Vanilla LFG в соцсетях
                </div>
                <div className={styles.social}>
                    <SocialButton href="https://discord.com/invite/Y7Ewpzr">
                        <img src={DiscordIcon} alt='discord' />
                    </SocialButton>
                </div>
            </Container>
        </div>
    )
}