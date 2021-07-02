import React, {useEffect, useState} from "react";
import {Grid, Typography} from "@material-ui/core";

import GuideForm from "../../components/GuideForm/GuideForm";
import GuideWrapper from "modules/guide/components/GuideWrapper/GuideWrapper";
import StyledPaper from "modules/UI/components/StyledPaper/StyledPaper";

import styles from "./GuidesSubmitView.module.scss";

export default function GuidesSubmitView() {
    const [guide, setGuide] = useState({user: {}});

    useEffect(() => {
        if (window.$WowheadPower) {
            window.$WowheadPower.refreshLinks();
        }
    }, [guide])

    return (
        <>
            <StyledPaper className={styles.paper}>
                <Typography component="h1" variant="h5" color="secondary">
                    Создать гайд
                </Typography>

                <GuideForm setGuide={setGuide} />
            </StyledPaper>


            <Grid container spacing={6}>
                <Grid item lg={9} xs={12}>
                    <Typography component="h1" variant="h5" color="secondary" className={styles.preview}>
                        Превью
                    </Typography>
                    <GuideWrapper guide={guide} />
                </Grid>
            </Grid>
        </>
    )
}