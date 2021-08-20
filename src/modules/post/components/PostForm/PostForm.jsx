import React, {useEffect, useState} from "react";
import {FormProvider, Controller, useForm} from "react-hook-form";
import {Grid} from "@material-ui/core";
import {useMutation, useLazyQuery} from "@apollo/client";
import {useParams, useHistory} from "react-router-dom";
import { toast } from "react-toastify";

import queries from "@queries";
import {TRoutes} from "shared/types";

import FormInput from "modules/UI/components/Field/FormInput";
import ContentEditor from "modules/UI/components/ContentEditor/ContentEditor";
import styles from "modules/post/components/PostForm/PostForm.module.scss";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import StyledButton from "modules/UI/components/StyledButton/StyledButton";

export default function PostForm() {
    const { id } = useParams()
    const history = useHistory()
    const [text, setText] = useState('');
    const [ fetchQuery, { loading, data } ] = useLazyQuery(queries.posts.GET, { fetchPolicy:'network-only' });
    const [ createPost ] = useMutation(queries.posts.CREATE);
    const [ updatePost ] = useMutation(queries.posts.UPDATE);

    const methods = useForm({
        resolver: zodResolver(
            z.object({
                title: z.string().nonempty('Обязательное поле'),
                text: z.string().min(9, 'Обязательное поле'),
                thumbnailUrl: z.string().max(0).or(z.string().url())
            })
        ),
    });
    const { handleSubmit, control, errors, setValue } = methods;

    useEffect(() => {
        if (id) {
            fetchQuery({variables: { id }})
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    useEffect(() => {
        if (!loading && data) {
            setValue('title', data.post.title);
            if (data.post.thumbnailUrl) {
                setValue('thumbnailUrl', data.post.thumbnailUrl);
            }
            setText(data.post.text);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading, data])

    const onSubmit = data => {
        if (id) {
            handleUpdate({...data, id});
        } else {
            handleCreate(data);
        }
    }

    const handleCreate = data => {
        createPost({ variables: data }).then(response => {
            history.push(TRoutes.MAIN)
        }).catch(e => {});
    }

    const handleUpdate = data => {
        updatePost({ variables: data }).then(response => {
            toast.success('Новость обновлена');
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
                            as={<ContentEditor editorText={text} />}
                            name="text"
                            control={control}
                            defaultValue=''
                            error={!!errors.text?.message}
                            helperText={errors.text?.message}
                        />
                    </Grid>
                </Grid>


                <StyledButton
                    type="submit"
                    className={styles.submit}
                >
                    {id ? 'Сохранить' : 'Создать'}
                </StyledButton>
            </form>
        </FormProvider>
    )
}
