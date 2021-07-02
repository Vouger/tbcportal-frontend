import React from "react";
import {Container} from "@material-ui/core";

import styles from "./FooterCopyright.module.scss";

export default function FooterCopyright() {
    return (
        <div className={styles.root}>
            <Container maxWidth="xl" className={styles.container}>
                <div className={styles.copyright}>
                    @ 2021 VanillaLFG
                </div>
                <div className={styles.privacy}>
                    <a href="/">Политика конфиденциальности</a>
                </div>
            </Container>
        </div>
    )
}