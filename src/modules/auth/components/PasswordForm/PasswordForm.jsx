import React from 'react'
import { Button } from '@material-ui/core'
import { useForm, FormProvider  } from 'react-hook-form'
import { useMutation } from '@apollo/client'

import FormInput from "../../../UI/components/Field/FormInput"
import { Queries } from "../../../../shared/queries"
import styles from './PasswordForm.module.scss'
import { TRoutes } from "../../../../shared/types";
import { useHistory } from "react-router-dom";

export default function PasswordForm() {
    const history = useHistory()
    const methods = useForm();
    const { handleSubmit } = methods;

    const [ passwordRequest ] = useMutation(Queries.PASSWORD_REQUEST);

    const onSubmit = data => {
        passwordRequest({ variables: data }).then(response => {
            const email = response && response.data && response.data.passwordRequest.email

            if (email) {
                if (email) {
                    history.push(TRoutes.NOTIFICATION('password_request'))
                }
            }
        }).catch(e => {});
    }

    return (
        <FormProvider {...methods}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    variant="outlined"
                    margin="normal"
                    label="Email Address"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    defaultValue=""
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={styles.submit}
                >
                    Send recovery email
                </Button>
            </form>
        </FormProvider>
    );
}