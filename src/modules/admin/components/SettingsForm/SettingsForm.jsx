import React from "react";
import {FormProvider, useForm} from "react-hook-form";
import {Button, Grid} from "@material-ui/core";

import FormInput from "modules/UI/components/Field/FormInput";
import Banner from "modules/landing/components/Banner/Banner";
import styles from "./SettingsForm.module.scss";

export default function SettingsForm() {
    const methods = useForm();
    const { handleSubmit, watch } = methods;

    let bannerImage = watch('bannerImage');
    let bannerTitle = watch('bannerTitle');
    let bannerText = watch('bannerText');
    let bannerLink = watch('bannerLink');
    let bannerLinkText = watch('bannerLinkText');

    const onSubmit = data => {

    }

    return (
        <Grid container spacing={6}>
            <Grid item lg={3} xs={12}>
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
                            onChange={(val) => {
                                console.log('val', val);
                            }}
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
                            required
                            fullWidth
                            id="bannerText"
                            name="bannerText"
                            type="text"
                        />

                        <FormInput
                            variant="outlined"
                            margin="normal"
                            label="Banner Link"
                            required
                            fullWidth
                            id="bannerLink"
                            name="bannerLink"
                            type="text"
                        />

                        <FormInput
                            variant="outlined"
                            margin="normal"
                            label="Banner Link Text"
                            required
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
            </Grid>

            <Grid item lg={9} xs={12}>
                <Banner post={{
                    title: bannerTitle,
                    text: bannerText,
                    image: bannerImage,
                    link: bannerLink,
                    imgText: 'main image description',
                    linkText: bannerLinkText,
                }} />
            </Grid>
        </Grid>
    )
}