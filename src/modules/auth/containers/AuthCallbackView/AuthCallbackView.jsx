import React, {useEffect} from 'react'
import {LinearProgress} from "@material-ui/core";

export default function AuthCallbackView() {

    useEffect(() => {
        const params = window.location.search;
        if (window.opener) {
            window.opener.postMessage(params);
            window.close();
        }
    });

    return (
        <LinearProgress />
    )
}