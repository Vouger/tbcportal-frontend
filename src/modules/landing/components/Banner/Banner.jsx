import React from 'react';
import {Button, Grid, Paper, Typography} from "@material-ui/core";

import styles from './Banner.module.scss';
import PropTypes from "prop-types";

function Banner({post}) {
    const { bannerImage, bannerTitle, bannerText, bannerLink, bannerLinkText } = post;

    return (
        <Paper className={styles.mainFeaturedPost} style={{ backgroundImage: `url(${bannerImage || ''})` }}>
            {<img style={{ display: 'none' }} src={bannerImage || ''} alt='' />}
            <div className={styles.overlay} />
            <Grid container>
                <Grid item md={6}>
                    <div className={styles.mainFeaturedPostContent}>
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            {bannerTitle || ''}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {bannerText || ''}
                        </Typography>
                        {bannerLink && (
                            <Button component="a" href={bannerLink || ''} variant="contained" color="primary">
                                {bannerLinkText || 'Go'}
                            </Button>
                        )}
                    </div>
                </Grid>
            </Grid>
        </Paper>
    )
}

Banner.propTypes = {
    post: PropTypes.object
}

export default Banner;