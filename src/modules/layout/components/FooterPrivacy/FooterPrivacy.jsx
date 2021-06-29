import React from "react";
import {Container} from "@material-ui/core";

import FooterLogo from "assets/footer-logo.png";

import styles from "./FooterPrivacy.module.scss";

export default function FooterPrivacy() {
    return (
        <div className={styles.root}>
            <Container maxWidth="xl" className={styles.container}>
                <div className={styles.logo}>
                    <img alt="Vanilla LFG" src={FooterLogo}/>
                </div>
                <div className={styles.privacy}>
                    <div>
                        Политика конфиденциальности
                    </div>
                    <a href="/">Соглашение</a> | <a href="/">Условия</a>
                </div>
            </Container>
        </div>
    )
}