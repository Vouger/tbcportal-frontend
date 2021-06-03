import React from "react";
import {Helmet} from "react-helmet";
import {TLabels} from "shared/types";

function MetaTags(props) {
    const {title, description, wowhead} = props;

    const printTitle = () => {
        let titleText = TLabels.SITE_NAME;

        if (title) {
            titleText = title + ' | ' + titleText;
        }

        return titleText;
    }

    return (
        <Helmet>
            <title>{ printTitle() }</title>
            <meta name="keywords" content="world of warcraft, wow, vanilla wow, classic wow, warcraft, стримы, гайды, гайд разбойник, гайд воин, гайд шаман" />
            <meta name="description" content={description || TLabels.SITE_DESCRIPTION} />

            {
                wowhead
                    ? <script src="https://wow.zamimg.com/widgets/power.js"></script>
                    : ''
            }

        </Helmet>
    )
}

export default MetaTags;