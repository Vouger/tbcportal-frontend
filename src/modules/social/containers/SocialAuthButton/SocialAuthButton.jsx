import React from "react"
import PropTypes from "prop-types";
import { useMutation } from "@apollo/client";
import { Button } from "@material-ui/core";
import clsx from "clsx";

import queries from "@queries";

import styles from "./SocialAuthButton.module.scss";

function SocialAuthButton(props) {
    const {url, source, handleLogin} = props;
    const [ SocialAuth ] = useMutation(queries.auth.SOCIAL);

    const openPopup = () => {
        const width = 600, height = 800
        const left = (window.innerWidth / 2) - (width / 2)
        const top = (window.innerHeight / 2) - (height / 2)

        return window.open(url, '',
            `toolbar=no, location=no, directories=no, status=no, menubar=no, 
             scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
             height=${height}, top=${top}, left=${left}`
        )
    }

    const handleCallback = (event) => {
        const params = new URLSearchParams(event.data);
        const code = params.get('code');

        SocialAuth({ variables: {source, code} }).then(response => {
            const {token, role} = response && response.data && response.data.socialAuth;

            if (token) {
                handleLogin(token, role);
            }
        }).catch(e => {});
    }

    const handleClick = () => {
        openPopup();

        window.addEventListener('message', event => handleCallback(event), false);
    }

    return (
        <Button
            fullWidth
            className={clsx(styles.root, props.className)}
            onClick={handleClick}
        >
            {props.children}
        </Button>
    )
}

SocialAuthButton.propTypes = {
    url: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    handleLogin: PropTypes.func.isRequired,
    className: PropTypes.string
}

export default SocialAuthButton;