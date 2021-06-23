import React from 'react';
import {Container} from "@material-ui/core";

import YoutubeIcon from 'assets/social/youtube.png';
import VkIcon from 'assets/social/vk.png';
import RedditIcon from 'assets/social/reddit.png';
import TwitterIcon from 'assets/social/twitter.png';

import SocialButton from "modules/layout/components/SocialButton/SocialButton";
import styles from './Footer.module.scss'

function Footer() {
    return (
        <footer className={styles.root}>
            <div className={styles.topWrapper}>
                <Container maxWidth="xl" className={styles.top}>
                    <div className={styles.title}>
                        Vanilla LFG в соцсетях
                    </div>
                    <div className={styles.social}>
                        <SocialButton href="https://vk.com">
                            <img src={VkIcon} alt='vkontakte' />
                        </SocialButton>
                        <SocialButton href="https://www.reddit.com/">
                            <img src={RedditIcon} alt='reddit' />
                        </SocialButton>
                        <SocialButton href="https://twitter.com">
                            <img src={TwitterIcon} alt='twitter' />
                        </SocialButton>
                        <SocialButton href="https://youtube.com">
                            <img src={YoutubeIcon} alt='youtube' />
                        </SocialButton>
                    </div>
                </Container>
            </div>
            <div className={styles.bottomWrapper}>
                <Container maxWidth="xl" className={styles.bottom}>
                    <img alt="Vanilla LFG" src="/header_logo.png"/>
                </Container>
            </div>
        </footer>
    );
}

export default Footer;