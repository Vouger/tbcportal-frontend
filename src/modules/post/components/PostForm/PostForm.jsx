import React from "react";
import {FormProvider, Controller, useForm} from "react-hook-form";
import {Button, Grid} from "@material-ui/core";
import {useMutation} from "@apollo/client";
import {useHistory} from "react-router-dom";

import queries from "@queries";
import {TRoutes} from "shared/types";

import FormInput from "modules/UI/components/Field/FormInput";
import ContentEditor from "modules/UI/components/ContentEditor/ContentEditor";
import styles from "modules/post/components/PostForm/PostForm.module.scss";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";

export default function PostForm() {
    const history = useHistory()
    const methods = useForm({
        resolver: zodResolver(
            z.object({
                title: z.string().nonempty('Обязательное поле'),
                text: z.string().min(9, 'Обязательное поле'),
                thumbnailUrl: z.string().max(0).or(z.string().url())
            })
        ),
    });
    const { handleSubmit, control, errors } = methods;

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
                            label="Название"
                            fullWidth
                            id="title"
                            name="title"
                            error={!!errors.title?.message}
                            helperText={errors.title?.message}
                        />
                    </Grid>

                    <Grid item lg={8} xs={12}>
                        <FormInput
                            variant="outlined"
                            color="primary"
                            margin="normal"
                            label="Ссылка на обложку"
                            fullWidth
                            id="thumbnailUrl"
                            name="thumbnailUrl"
                            error={!!errors.thumbnailUrl?.message}
                            helperText={errors.thumbnailUrl?.message ? 'Не верный формат URL' : ''}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Controller
                            as={<ContentEditor />}
                            name="text"
                            control={control}
                            defaultValue=''
                            error={!!errors.text?.message}
                            helperText={errors.text?.message}
                        />
                    </Grid>
                </Grid>


                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={styles.submit}
                >
                    Создать
                </Button>
            </form>
        </FormProvider>
    )
}