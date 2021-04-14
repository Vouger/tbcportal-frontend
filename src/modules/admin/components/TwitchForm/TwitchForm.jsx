import React from "react";
import {FormProvider, useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {Button} from "@material-ui/core";
import {useMutation} from "@apollo/client";

import queries from "@queries";

import FormInput from "modules/UI/components/Field/FormInput";
import styles from "./TwitchForm.module.scss";

export default function TwitchForm() {
    const methods = useForm();
    const { handleSubmit } = methods;
    const [ CreateTwitchStream ] = useMutation(queries.twitch.ADD);

    const onSubmit = data => {
        data.order = parseInt(data.order);

        CreateTwitchStream({variables: data}).then(response => {
            const name = response && response.data && response.data.createTwitchStream.name

            if (name) {
                toast.success("Twitch stream added");
            }
        }).catch(e => {});
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    variant="outlined"
                    color="primary"
                    margin="normal"
                    label="Channel name"
                    required
                    fullWidth
                    id="name"
                    name="name"
                    type="text"
                />

                <FormInput
                    variant="outlined"
                    margin="normal"
                    label="Order"
                    required
                    fullWidth
                    id="order"
                    name="order"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={styles.submit}
                >
                    Save
                </Button>
            </form>
        </FormProvider>
    )
}