import React, { useEffect, useState } from 'react'
import { useMutation } from "@apollo/client";
import { useParams } from 'react-router-dom'
import { Else, If, Then } from 'react-if'
import { Paper, Grid, Typography, LinearProgress } from '@material-ui/core'
import { connect } from "react-redux";

import Layout from "../../../layout/containers/Layout/Layout";
import queries from "../../../../queries";
import { setToken } from "../../../../shared/helpers";
import * as userActions from "../../../../redux/ducks/user";
import styles from './ConfirmationView.module.scss'

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
            const token = response && response.data && response.data.confirmation.token

            if (token) {
                setConfirmed(true);

                setToken(token);

                setTimeout(function () {
                    props.logInAction();
                }, 3000)
            }
        });
    })

    return (
        <Layout>
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
        </Layout>
    )
}
const mapDispatchToProps = dispatch => ({
    logInAction: data => dispatch(userActions.logIn(data)),
})

export default connect(null, mapDispatchToProps)(ConfirmationView)