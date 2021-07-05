import React from "react";
import PropTypes from "prop-types";

import RawHtml from "modules/UI/components/RawHtml/RawHtml";
import DetailsHeader from "modules/guide/components/DetailsHeader/DetailsHeader";
import StyledPaper from "modules/UI/components/StyledPaper/StyledPaper";

import styles from "./GuideWrapper.module.scss";

function GuideWrapper({guide}) {
    return (
        <StyledPaper className={styles[guide.className]}>
            <DetailsHeader guide={guide} />
            <div className={styles.content}>
                <RawHtml>{guide.text}</RawHtml>
            </div>
        </StyledPaper>
    )
}

GuideWrapper.propTypes = {
    guide: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        className: PropTypes.string.isRequired,
        views: PropTypes.number.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        user: PropTypes.shape({
            nickname: PropTypes.string.isRequired
        })
    })
}

export default GuideWrapper;