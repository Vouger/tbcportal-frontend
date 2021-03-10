import React, {useEffect} from "react";
import {FormProvider, useForm} from "react-hook-form";
import {Button} from "@material-ui/core";
import {toast} from "react-toastify";
import {useMutation, useQuery} from "@apollo/client";

import FormInput from "../../../UI/components/Field/FormInput";
import {Queries} from "../../../../shared/queries";
import styles from './ProfileForm.module.scss'

export default function ProfileForm() {
    const methods = useForm();
    const {handleSubmit, setValue} = methods;
    const { loading, data, refetch } = useQuery(Queries.PROFILE);
    const [ UpdateProfile ] = useMutation(Queries.UPDATE_PROFILE);

    useEffect(() => {
        if (!loading) {
            refetch()
        }
    }, [])

    useEffect(() => {
        if (!loading && data && data.profileInfo) {
            setValue('nickname', data.profileInfo.nickname);
        }
    }, [data])

    const onSubmit = data => {
        UpdateProfile({variables: data}).then(response => {
            const nickname = response && response.data && response.data.updateProfile.nickname

            if (nickname) {
                toast.success("Profile updated");
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

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Save
                </Button>
            </form>
        </FormProvider>
    )
}