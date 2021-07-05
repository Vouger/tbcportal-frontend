import React, {useEffect} from "react";
import {FormProvider, useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {useMutation, useQuery} from "@apollo/client";

import queries from "@queries";

import StyledButton from "modules/UI/components/StyledButton/StyledButton";
import FormInput from "../../../UI/components/Field/FormInput";

import styles from './ProfileForm.module.scss'

export default function ProfileForm() {
    const methods = useForm();
    const {handleSubmit, setValue} = methods;
    const { loading, data } = useQuery(queries.profile.PROFILE,{
        fetchPolicy: "no-cache"
    });
    const [ UpdateProfile ] = useMutation(queries.profile.UPDATE_PROFILE);

    useEffect(() => {
        if (!loading && data && data.profileInfo) {
            setValue('nickname', data.profileInfo.nickname);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    const onSubmit = data => {
        UpdateProfile({variables: data}).then(response => {
            const nickname = response && response.data && response.data.updateProfile.nickname

            if (nickname) {
                toast.success("Профиль обновлен");
            }
        }).catch(e => {});
    }

    return (
        <FormProvider {...methods}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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

                <StyledButton
                    type="submit"
                    fullWidth
                    size="small"
                >
                    Сохранить
                </StyledButton>
            </form>
        </FormProvider>
    )
}