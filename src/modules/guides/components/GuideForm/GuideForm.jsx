import React, {useEffect} from "react";
import {FormProvider, Controller, useForm, useWatch} from "react-hook-form";
import {Button, Grid, MenuItem} from "@material-ui/core";
import {useMutation} from "@apollo/client";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";

import queries from "@queries";
import {TRoutes} from "shared/types";

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

GuideForm.propTypes = {
    setGuide: PropTypes.func.isRequired
}

export default GuideForm;