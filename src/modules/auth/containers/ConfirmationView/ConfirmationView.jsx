import React, { useEffect, useState } from 'react'
import { useMutation } from "@apollo/client";
import { useParams } from 'react-router-dom'
import { Else, If, Then } from 'react-if'
import { Paper, Grid, Typography, LinearProgress } from '@material-ui/core'
import { connect } from "react-redux";

import queries from "@queries";
import { setAuth } from "shared/helpers";
import * as userActions from "redux/ducks/user";

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
    })

    return (
        <Grid item xs={12}>
            <Paper>
                <If condition={error}>
                    <Then>
                        <Typography variant="h5" gutterBottom>
                            {error}
                        </Typography>
                    </Then>
                    <Else>
                        <Typography variant="h5" gutterBottom>
                            {isConfirmed ? "Thank you. You email was successfully verified." : "Loading..."}
                            <LinearProgress />
                        </Typography>
                    </Else>
                </If>
            </Paper>
        </Grid>
    )
}
const mapDispatchToProps = dispatch => ({
    logInAction: data => dispatch(userActions.logIn(data)),
})

export default connect(null, mapDispatchToProps)(ConfirmationView)