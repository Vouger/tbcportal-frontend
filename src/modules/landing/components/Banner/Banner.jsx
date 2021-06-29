import React from 'react';
import PropTypes from "prop-types";

import styles from './Banner.module.scss';
import StyledButton from "modules/UI/components/StyledButton/StyledButton";

function Banner({post}) {
    const { bannerImage, bannerTitle, bannerText, bannerLink, bannerLinkText } = post;

    return (
        <div className={styles.mainFeaturedPost}>
            <img className={styles.image} src={bannerImage || ''} alt='' />

            <div className={styles.mainFeaturedPostContent}>
                <div className={styles.badge}>
                    Vanilla LFG
                </div>
                <div className={styles.header}>
                    {bannerTitle || ''}
                </div>
                <div className={styles.description}>
                    {bannerText || ''}
                </div>
                {bannerLink && (
                    <StyledButton to={bannerLink || ''} className={styles.button}>
                        {bannerLinkText || 'Go'}
                    </StyledButton>
                )}
            </div>
        </div>
    )
}

Banner.propTypes = {
    post: PropTypes.object
}

export default Banner;