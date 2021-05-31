import React, { useEffect, useState } from 'react'
import { useMutation } from "@apollo/client";
import { useParams } from 'react-router-dom'
import { Else, If, Then } from 'react-if'
import { LinearProgress } from '@material-ui/core'
import { connect } from "react-redux";

import queries from "@queries";
import { setAuth } from "shared/helpers";
import * as userActions from "redux/ducks/user";
import NotificationMessage from "modules/auth/components/NotificationMessage/NotificationMessage";

function ConfirmationView(props) {
    const { token: confToken } = useParams()
    const [isConfirmed, setConfirmed] = useState(false)
    const [error, setError] = useState('')
    const [ confirmation ] = useMutation(queries.auth.CONFIRMATION, {
        onError: error => {
            setError(error.message);
        }
    });

    useEffect(() => {
        confirmation({ variables: { token: confToken } }).then(response => {
            const {token, role} = response && response.data && response.data.confirmation;

            if (token) {
                setConfirmed(true);

                setAuth({token, role});

                setTimeout(function () {
                    props.logInAction();
                }, 3000)
            }
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <If condition={error}>
            <Then>
                <NotificationMessage message={error} />
            </Then>
            <Else>
                <NotificationMessage message={isConfirmed ? "Спасибо. Ваш имейл подтвержден. Авторизация..." : "Загрузка..."} />
                <LinearProgress />
            </Else>
        </If>
    )
}
const mapDispatchToProps = dispatch => ({
    logInAction: data => dispatch(userActions.logIn(data)),
})

export default connect(null, mapDispatchToProps)(ConfirmationView)