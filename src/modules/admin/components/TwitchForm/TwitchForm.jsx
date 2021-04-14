import React from "react";
import {FormProvider, useForm} from "react-hook-form";
import {Button} from "@material-ui/core";

import FormInput from "modules/UI/components/Field/FormInput";
import styles from "./TwitchForm.module.scss";

export default function TwitchForm() {
    const methods = useForm();
    const { handleSubmit } = methods;

    const onSubmit = data => {

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
                    type="text"
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