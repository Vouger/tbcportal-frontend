import React from "react";
import {FormProvider, Controller, useForm} from "react-hook-form";
import {Button, Grid, MenuItem} from "@material-ui/core";
import {useMutation} from "@apollo/client";
import {useHistory} from "react-router-dom";

import FormInput from "../../../UI/components/Field/FormInput";
import ContentEditor from "../../../UI/components/ContentEditor/ContentEditor";
import {Queries} from "../../../../shared/queries";
import SelectInput from "../../../UI/components/Field/SelectInput";
import {TRoutes} from "../../../../shared/types";
import styles from "./GuideForm.module.scss";


export default function GuideForm(props) {
    const history = useHistory()
    const methods = useForm();
    const { handleSubmit, control } = methods;

    const [ createGuide ] = useMutation(Queries.CREATE_GUIDE);

    const onSubmit = data => {
        createGuide({ variables: data }).then(response => {
            history.push(TRoutes.GUIDES)
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

                    <Grid item lg={4} xs={12}>
                        <SelectInput
                            name="className"
                            label="Class"
                            control={control}
                            variant="outlined"
                            defaultValue="all"
                            fullWidth
                        >
                            <MenuItem value="all">All</MenuItem>
                            <MenuItem value="druid">Druid</MenuItem>
                            <MenuItem value="hunter">Hunter</MenuItem>
                            <MenuItem value="mage">Mage</MenuItem>
                            <MenuItem value="paladin">Paladin</MenuItem>
                            <MenuItem value="priest">Priest</MenuItem>
                            <MenuItem value="rogue">Rogue</MenuItem>
                            <MenuItem value="shaman">Shaman</MenuItem>
                            <MenuItem value="warlock">Warlock</MenuItem>
                            <MenuItem value="warrior">Warrior</MenuItem>
                        </SelectInput>
                    </Grid>

                    <Grid item lg={4} xs={12}>
                        <SelectInput
                            name="contentType"
                            label="Content Type"
                            control={control}
                            variant="outlined"
                            defaultValue="all"
                            fullWidth
                        >
                            <MenuItem value="all">All</MenuItem>
                            <MenuItem value="pve">PVE</MenuItem>
                            <MenuItem value="pvp">PVP</MenuItem>
                            <MenuItem value="leveling">Leveling</MenuItem>
                            <MenuItem value="lore">Lore</MenuItem>
                        </SelectInput>
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