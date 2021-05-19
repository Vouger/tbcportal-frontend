import React, {useEffect} from "react";
import {FormProvider, Controller, useForm, useWatch} from "react-hook-form";
import {Button, Grid, MenuItem} from "@material-ui/core";
import {useMutation} from "@apollo/client";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";

import queries from "@queries";
import {TGuidesFilter, TRoutes} from "shared/types";

import FormInput from "../../../UI/components/Field/FormInput";
import ContentEditor from "../../../UI/components/ContentEditor/ContentEditor";
import SelectInput from "../../../UI/components/Field/SelectInput";

import styles from "./GuideForm.module.scss";

function GuideForm({setGuide}) {
    const history = useHistory()
    const methods = useForm();
    const { handleSubmit, control } = methods;

    const [ createGuide ] = useMutation(queries.guides.CREATE_GUIDE);

    let title = useWatch({ control, name: "title" });
    let className = useWatch({ control, name: "className" });
    let contentType = useWatch({ control, name: "contentType" });
    let text = useWatch({ control, name: "text" });

    useEffect(() => {
        setGuide({
            title,
            className,
            contentType,
            text
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [title, className, contentType, text])

    const onSubmit = data => {
        createGuide({ variables: data }).then(response => {
            history.push(TRoutes.GUIDES)
        }).catch(e => {});
    }

    return (
        <FormProvider {...methods}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item lg={3} xs={12}>
                        <FormInput
                            variant="outlined"
                            color="primary"
                            margin="normal"
                            label="Название"
                            required
                            fullWidth
                            id="title"
                            name="title"
                            className={styles.control}
                        />

                        <SelectInput
                            name="className"
                            label="Класс"
                            control={control}
                            variant="outlined"
                            defaultValue="all"
                            fullWidth
                        >
                            {TGuidesFilter.CLASS.map((item) => {
                                return (<MenuItem value={item.name}>{item.title}</MenuItem>)
                            })}
                        </SelectInput>

                        <SelectInput
                            name="contentType"
                            label="Тип контента"
                            control={control}
                            variant="outlined"
                            defaultValue="all"
                            fullWidth
                        >
                            {TGuidesFilter.CONTENT.map((item) => {
                                return (<MenuItem value={item.name}>{item.title}</MenuItem>)
                            })}
                        </SelectInput>

                        <FormInput
                            variant="outlined"
                            color="primary"
                            margin="normal"
                            label="Ссылка на обложку"
                            fullWidth
                            id="thumbnailUrl"
                            name="thumbnailUrl"
                        />
                    </Grid>
                    <Grid item lg={9} xs={12}>
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
                    Создать
                </Button>
            </form>
        </FormProvider>
    )
}

GuideForm.propTypes = {
    setGuide: PropTypes.func.isRequired
}

export default GuideForm;