import React, {useEffect, useState} from 'react'
import { Button } from '@material-ui/core'
import { useForm, FormProvider  } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'

import FormInput from "../../../UI/components/Field/FormInput"
import { Queries } from "../../../../shared/queries";
import { TRoutes } from "../../../../shared/types";
import styles from './RegistrationForm.module.scss'
import PasswordInput from "../../../UI/components/Field/PasswordInput";

export default function RegistrationForm(props) {
    const [passErr, setPassErr] = useState('');
    const history = useHistory()
    const methods = useForm();
    const {handleSubmit, watch, register} = methods;

    const password = watch('password');
    const verify = watch('verify');

    const [Registration] = useMutation(Queries.REGISTRATION);

    const onSubmit = data => {
        if (data.password !== data.verify) {
            setPassErr('Passwords mismatch!')
            return;
        }

        Registration({variables: data}).then(response => {
            const email = response && response.data && response.data.register.email

            if (email) {
                history.push(TRoutes.NOTIFICATION('confirmation'))
            }
        }).catch(e => {});
    }

    useEffect(() => {
        if (password === verify) {
            setPassErr('')
        }
    }, [password, verify])

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
                    type="email"
                    defaultValue=""
                />

                <FormInput
                    variant="outlined"
                    margin="normal"
                    label="Nickname"
                    required
                    fullWidth
                    id="nickname"
                    name="nickname"
                    defaultValue=""
                />

                <PasswordInput
                    variant="outlined"
                    margin="normal"
                    label="Password"
                    required
                    fullWidth
                    id="password"
                    name="password"
                    defaultValue=""
                    error={passErr}
                    helperText={passErr}
                    ref={register()}
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
                    error={passErr}
                    helperText={passErr}
                    ref={register()}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={styles.submit}
                >
                    Sign Up
                </Button>
            </form>
        </FormProvider>
    );
}