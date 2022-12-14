import React, {useEffect, useState} from 'react'
import { useForm, FormProvider  } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'

import queries from "@queries";
import { TRoutes } from "shared/types";

import PasswordInput from "../../../UI/components/Field/PasswordInput";
import StyledButton from "modules/UI/components/StyledButton/StyledButton";
import FormInput from "../../../UI/components/Field/FormInput"

import styles from './RegistrationForm.module.scss'

export default function RegistrationForm(props) {
    const [passErr, setPassErr] = useState('');
    const history = useHistory()
    const methods = useForm();
    const {handleSubmit, watch, register} = methods;

    const password = watch('password');
    const verify = watch('verify');

    const [Registration] = useMutation(queries.auth.REGISTRATION);

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
                    label="Email"
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
                    label="??????"
                    required
                    fullWidth
                    id="nickname"
                    name="nickname"
                    defaultValue=""
                />

                <PasswordInput
                    variant="outlined"
                    margin="normal"
                    label="????????????"
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
                    label="?????????????????? ????????????"
                    required
                    fullWidth
                    id="verify"
                    name="verify"
                    defaultValue=""
                    error={passErr}
                    helperText={passErr}
                    ref={register()}
                />

                <StyledButton
                    type="submit"
                    className={styles.submit}
                    fullWidth
                    size="small"
                >
                    ????????????????????????????????????
                </StyledButton>
            </form>
        </FormProvider>
    );
}