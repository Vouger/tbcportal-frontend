import React, {useEffect} from "react";
import {FormProvider, useForm} from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import {useMutation, useLazyQuery} from "@apollo/client";

import queries from "@queries";

import StyledButton from "modules/UI/components/StyledButton/StyledButton";
import FormInput from "modules/UI/components/Field/FormInput";
import {TRoutes} from "shared/types";

import styles from "./TwitchForm.module.scss";

export default function TwitchForm() {
    const { id } = useParams()
    const methods = useForm();
    const { handleSubmit, setValue } = methods;
    const [ fetchQuery, { loading, data } ] = useLazyQuery(queries.twitch.GET);
    const [ CreateTwitchStream ] = useMutation(queries.twitch.ADD);
    const [ UpdateTwitchStream ] = useMutation(queries.twitch.UPDATE);
    const history = useHistory()

    useEffect(() => {
        if (id) {
            fetchQuery({variables: { id }})
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    useEffect(() => {
        if (!loading && data) {
            setValue('name', data.getTwitchStream.name);
            setValue('order', data.getTwitchStream.order);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading, data])

    const onSubmit = data => {
        data.order = parseInt(data.order);

        if (id) {
            handleUpdate({...data, id});
        } else {
            handleCreate(data);
        }
    }

    const handleCreate = data => {
        CreateTwitchStream({variables: data}).then(response => {
            const name = response && response.data && response.data.createTwitchStream.name

            if (name) {
                toast.success("Twitch stream added");
                history.push(TRoutes.STREAMERS);
            }
        }).catch(e => {});
    }

    const handleUpdate = data => {
        UpdateTwitchStream({variables: data}).then(response => {
            const name = response && response.data && response.data.updateTwitchStream.name

            if (name) {
                toast.success("Twitch stream updated");
                history.push(TRoutes.STREAMERS);
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

                <StyledButton
                    type="submit"
                    className={styles.submit}
                    fullWidth
                    size="small"
                >
                    Сохранить
                </StyledButton>
            </form>
        </FormProvider>
    )
}