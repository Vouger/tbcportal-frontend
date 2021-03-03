import React from "react";
import {FormProvider, useForm} from "react-hook-form";

import FormInput from "../../../UI/containers/Field/FormInput";
import ContentEditor from "../../../UI/components/ContentEditor/ContentEditor";
import styles from "./GuideForm.module.scss";
import {Button} from "@material-ui/core";

export default function GuideForm(props) {
    const methods = useForm();
    const { register, handleSubmit } = methods;

    const onSubmit = data => {

    }

    return (
        <FormProvider {...methods}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    variant="outlined"
                    color="primary"
                    margin="normal"
                    label="Title"
                    required
                    halfWidth
                    id="title"
                    name="title"
                />

                <ContentEditor />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={styles.submit}
                >
                    Submit
                </Button>
            </form>
        </FormProvider>
    )
}