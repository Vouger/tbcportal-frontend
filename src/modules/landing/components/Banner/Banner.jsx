import React from 'react';
import {Grid, Link, Paper, Typography} from "@material-ui/core";

import styles from './Banner.module.scss';

export default function Banner(props) {
    const { post } = props;

    return (
        <Paper className={styles.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})` }}>
            {<img style={{ display: 'none' }} src={post.image} alt={post.imgText} />}
            <div className={styles.overlay} />
            <Grid container>
                <Grid item md={6}>
                    <div className={styles.mainFeaturedPostContent}>
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            {post.title}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {post.description}
                        </Typography>
                        <Link variant="subtitle1" href="#">
                            {post.linkText}
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    )
}