import React from 'react'
import { connect } from 'react-redux'
import { Button, FormControlLabel, Checkbox } from '@material-ui/core'
import { useForm, FormProvider  } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import {useHistory} from "react-router-dom";

import queries from "@queries";
import { setAuth } from "shared/helpers"
import * as userActions from 'redux/ducks/user'

import FormInput from "../../../UI/components/Field/FormInput"
import PasswordInput from "../../../UI/components/Field/PasswordInput"
import GoogleButton from "../SocialAuth/GoogleButton/GoogleButton";
import styles from './LoginForm.module.scss'

function LoginForm (props) {
    const { state } = props.location;
    const history = useHistory()
    const methods = useForm();
    const { register, handleSubmit } = methods;

    const [ login ] = useMutation(queries.auth.LOGIN);

    const handleLogin = (token, role) => {
        setAuth({token, role});

        props.logInAction();

        history.push(state && state.from && state.from.pathname)
    }

    const onSubmit = data => {
        data.remember = !!data.remember;

        login({ variables: data }).then(response => {
            const {token, role} = response && response.data && response.data.login

            if (token) {
                handleLogin(token, role);
            }
        }).catch(e => {});
    }

    return (
        <FormProvider {...methods}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    variant="outlined"
                    color="primary"
                    margin="normal"
                    label="Email Address"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    type="email"
                />

                <PasswordInput
                    variant="outlined"
                    margin="normal"
                    label="Password"
                    required
                    fullWidth
                    id="password"
                    name="password"
                />

                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                    name="remember"
                    inputRef={register}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={styles.submit}
                >
                    Sign In
                </Button>

                <GoogleButton
                    handleLogin={handleLogin}
                />
            </form>
        </FormProvider>
    );
}

const mapDispatchToProps = dispatch => ({
    logInAction: data => dispatch(userActions.logIn(data)),
})

export default connect(null, mapDispatchToProps)(LoginForm)