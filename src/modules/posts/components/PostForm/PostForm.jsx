import React from "react";
import {FormProvider, Controller, useForm} from "react-hook-form";
import {Button, Grid} from "@material-ui/core";
import {useMutation} from "@apollo/client";
import {useHistory} from "react-router-dom";

import queries from "@queries";
import {TRoutes} from "shared/types";

import FormInput from "../../../UI/components/Field/FormInput";
import ContentEditor from "../../../UI/components/ContentEditor/ContentEditor";
import styles from "./PostForm.module.scss";
import PropTypes from "prop-types";


export default function PostForm() {
    const history = useHistory()
    const methods = useForm();
    const { handleSubmit, control } = methods;

    const [ createPost ] = useMutation(queries.posts.CREATE);

    const onSubmit = data => {
        createPost({ variables: data }).then(response => {
            history.push(TRoutes.MAIN)
        }).catch(e => {});
    }

    return (
        <FormProvider {...methods}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item lg={4} xs={12}>
                        <FormInput
                            variant="outlined"
                            color="primary"
                            margin="normal"
                            label="Title"
                            required
                            fullWidth
                            id="title"
                            name="title"
                        />
                    </Grid>

                    <Grid item lg={8} xs={12}>
                        <FormInput
                            variant="outlined"
                            color="primary"
                            margin="normal"
                            label="Thumbnail Url"
                            fullWidth
                            id="thumbnailUrl"
                            name="thumbnailUrl"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Controller
                            as={<ContentEditor />}
                            name="text"
                            control={control}
                        />
                    </Grid>
                </Grid>


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