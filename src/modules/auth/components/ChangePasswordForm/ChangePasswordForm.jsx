import React from 'react'
import { useForm, FormProvider  } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import queries from "@queries";
import { setAuth } from "shared/helpers";
import * as userActions from "redux/ducks/user";

import StyledButton from "modules/UI/components/StyledButton/StyledButton";
import PasswordInput from "../../../UI/components/Field/PasswordInput";

import styles from './ChangePasswordForm.module.scss'

function ChangePasswordForm(props) {
    const { token: confToken } = useParams()
    const methods = useForm();
    const { handleSubmit } = methods;

    const [ passwordChange ] = useMutation(queries.auth.PASSWORD_CHANGE);

    const onSubmit = data => {
        data.token = confToken;

        passwordChange({ variables: data }).then(response => {
            const {token, role} = response && response.data && response.data.passwordChange;

            if (token) {
                setAuth({token, role});

                props.logInAction();
            }
        }).catch(e => {});
    }

    return (
        <FormProvider {...methods}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <PasswordInput
                    variant="outlined"
                    margin="normal"
                    label="Password"
                    required
                    fullWidth
                    id="password"
                    name="password"
                    defaultValue=""
                />

                <PasswordInput
                    variant="outlined"
                    margin="normal"
                    label="Verify password"
                    required
                    fullWidth
                    id="verify"
                    name="verify"
                    defaultValue=""
                />

                <StyledButton
                    type="submit"
                    className={styles.submit}
                    fullWidth
                    size="small"
                >
                    Сменить пароль
                </StyledButton>
            </form>
        </FormProvider>
    );
}

const mapDispatchToProps = dispatch => ({
    logInAction: data => dispatch(userActions.logIn(data)),
})

export default connect(null, mapDispatchToProps)(ChangePasswordForm)