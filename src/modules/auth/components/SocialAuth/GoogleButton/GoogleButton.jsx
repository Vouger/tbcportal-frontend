import React from "react"
import GoogleLogin from "react-google-login"
import { useMutation } from "@apollo/client"
import { Button } from "@material-ui/core"

import queries from "@queries";
import GoogleIcon from "modules/UI/components/icons/GoogleIcon";

import styles from "./GoogleButton.module.scss"

function GoogleButton(props) {
    const [ GoogleAuth ] = useMutation(queries.auth.GOOGLE);

    const handleGoogleLogin = async googleData => {
        if (!googleData.tokenId) {
            return;
        }

        GoogleAuth({ variables: {token: googleData.tokenId} }).then(response => {
            const {token, role} = response && response.data && response.data.googleAuth

            if (token) {
                props.handleLogin(token, role);
            }
        }).catch(e => {});
    }

    return (
        <GoogleLogin
            render={renderProps => (
                <Button
                    className={styles.button}
                    onClick={renderProps.onClick}
                    type="submit"
                    fullWidth
                    variant="contained"
                >
                    <GoogleIcon />
                    Войти через Google
                </Button>
            )}
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            onSuccess={handleGoogleLogin}
            onFailure={handleGoogleLogin}
            cookiePolicy={'single_host_origin'}
        />
    )
}

export default GoogleButton;