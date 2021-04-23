import React, {useEffect} from "react";
import {FormProvider, useForm, useWatch } from "react-hook-form";
import {Button} from "@material-ui/core";
import {useMutation} from "@apollo/client";
import {toast} from "react-toastify";

import queries from "@queries";

import FormInput from "modules/UI/components/Field/FormInput";
import styles from "./SettingsForm.module.scss";
import PropTypes from "prop-types";

function SettingsForm ({ data, setPost }) {
    const methods = useForm();
    const { handleSubmit, setValue, control } = methods;
    const [ CreateOrUpdateSettings ] = useMutation(queries.settings.BULK_CREATE_OR_UPDATE);

    let bannerImage = useWatch({ control, name: "bannerImage" });
    let bannerTitle = useWatch({ control, name: "bannerTitle" });
    let bannerText = useWatch({ control, name: "bannerText" });
    let bannerLink = useWatch({ control, name: "bannerLink" });
    let bannerLinkText = useWatch({ control, name: "bannerLinkText" });

    useEffect(() => {
        if (data && data.settings) {
            data.settings.map((item) => {
                return setValue(item.name, item.value);
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    useEffect(() => {
        setPost({
            bannerImage,
            bannerTitle,
            bannerText,
            bannerLink,
            bannerLinkText
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bannerImage, bannerTitle, bannerText, bannerLink, bannerLinkText])

    const onSubmit = data => {
        let values = [];

        Object.keys(data).map((key) => {
            return values.push({
                name: key,
                value: data[key]
            });
        });

        CreateOrUpdateSettings({variables: {values}}).then(response => {
            const status = response && response.data && response.data.createOrUpdateSettings

            if (status) {
                toast.success("Saved");
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
                    label="Banner image"
                    required
                    fullWidth
                    id="bannerImage"
                    name="bannerImage"
                    type="text"
                />

                <FormInput
                    variant="outlined"
                    margin="normal"
                    label="Banner Title"
                    required
                    fullWidth
                    id="bannerTitle"
                    name="bannerTitle"
                    type="text"
                />

                <FormInput
                    variant="outlined"
                    margin="normal"
                    label="Banner text"
                    fullWidth
                    id="bannerText"
                    name="bannerText"
                    type="text"
                />

                <FormInput
                    variant="outlined"
                    margin="normal"
                    label="Banner Link"
                    fullWidth
                    id="bannerLink"
                    name="bannerLink"
                    type="text"
                />

                <FormInput
                    variant="outlined"
                    margin="normal"
                    label="Banner Link Text"
                    fullWidth
                    id="bannerLinkText"
                    name="bannerLinkText"
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

SettingsForm.propTypes = {
    data: PropTypes.object,
    setPost: PropTypes.func.isRequired
}

export default SettingsForm;