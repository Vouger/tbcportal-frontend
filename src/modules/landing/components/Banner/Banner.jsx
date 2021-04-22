import React from 'react';
import {Button, Grid, Paper, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

import styles from './Banner.module.scss';

export default function Banner(props) {
    const { post } = props;
    const { image, title, text, link, linkText } = post;

    return (
        <Paper className={styles.mainFeaturedPost} style={{ backgroundImage: `url(${image || ''})` }}>
            {<img style={{ display: 'none' }} src={image || ''} alt={post.imgText} />}
            <div className={styles.overlay} />
            <Grid container>
                <Grid item md={6}>
                    <div className={styles.mainFeaturedPostContent}>
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            {title || ''}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {text || ''}
                        </Typography>
                        {link && (
                            <Button component="a" href={link || ''} variant="contained" color="primary">
                                {linkText || 'Go'}
                            </Button>
                        )}
                    </div>
                </Grid>
            </Grid>
        </Paper>
    )
}