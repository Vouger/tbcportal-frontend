import React from "react";
import PropTypes from "prop-types";

import NewsIcon from 'assets/news.png';

import styles from "./ListHeader.module.scss";
import StyledButton from "modules/UI/components/StyledButton/StyledButton";

function ListHeader({title, link, showButton}) {
    return (
        <div className={styles.root}>
            <img src={NewsIcon} alt={title} />
            <div className={styles.titleWrap}>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.button}>
                    {showButton && (
                        <StyledButton to={link} size='medium'>
                            Создать
                        </StyledButton>
                    )}
                </div>
            </div>

        </div>
    )
}

ListHeader.defaultProps = {
    showButton: false
};

ListHeader.propTypes = {
    title: PropTypes.string.isRequired,
    showButton: PropTypes.bool.isRequired,
    link: PropTypes.string
}

export default ListHeader;