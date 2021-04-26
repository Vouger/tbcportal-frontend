import React from 'react';
import {Container, Typography} from "@material-ui/core";

import styles from './Footer.module.scss'

function Footer() {
    return (
            <footer className={styles.root}>
                <Container maxWidth="sm">
                    <Typography variant="body1">My sticky footer can be found here.</Typography>
                </Container>
            </footer>
    );
}

export default Footer;