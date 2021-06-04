import React from "react";
import {Helmet} from "react-helmet";
import {TLabels} from "shared/types";

function MetaTags(props) {
    const {title, description, keywords, keywordsClass, wowhead} = props;

    const printTitle = () => {
        let titleText = TLabels.SITE_NAME;

        if (title) {
            titleText = title + ' | ' + titleText;
        }

        return titleText;
    }

    const printKeywords = () => {
        let keywordsArray = TLabels.SITE_KEYWORDS;

        if (keywords) {
            keywordsArray = keywordsArray.concat(keywords)
        }

        if (keywordsClass && TLabels.CLASS_KEYWORDS[keywordsClass]) {
            keywordsArray = keywordsArray.concat(TLabels.CLASS_KEYWORDS[keywordsClass])
        }

        return keywordsArray.join(', ');
    }

    return (
        <Helmet>
            <title>{ printTitle() }</title>
            <meta name="keywords" content={ printKeywords() } />
            <meta name="description" content={description || TLabels.SITE_DESCRIPTION} />

            {
                wowhead
                    ? <script src="https://wow.zamimg.com/widgets/power.js"></script>
                    : ''
            }

        </Helmet>
    )
}

MetaTags.defaultProps = {
    keywords: []
};

export default MetaTags;