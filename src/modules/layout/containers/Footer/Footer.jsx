import React from 'react';

import FooterSocial from "modules/layout/components/FooterSocial/FooterSocial";
import FooterPrivacy from "modules/layout/components/FooterPrivacy/FooterPrivacy";
import FooterCopyright from "modules/layout/components/FooterCopyright/FooterCopyright";

function Footer() {
    return (
        <footer>
            <FooterSocial />
            <FooterPrivacy />
            <FooterCopyright />
        </footer>
    );
}

export default Footer;