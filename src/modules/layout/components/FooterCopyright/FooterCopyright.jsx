import React from "react";
import {Container} from "@material-ui/core";

import styles from "./FooterCopyright.module.scss";

export default function FooterCopyright() {
    return (
        <div className={styles.root}>
            <Container maxWidth="xl" className={styles.container}>
                @ 2021 VanillaLFG
            </Container>
        </div>
    )
}