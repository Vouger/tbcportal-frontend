import React from "react";
import {Container} from "@material-ui/core";

import TwitchForm from "modules/admin/components/TwitchForm/TwitchForm";
import StyledPaper from "modules/UI/components/StyledPaper/StyledPaper";

import styles from "./AdminTwitchAddView.module.scss";

export default function AdminTwitchAddView() {
    return (
        <Container component={StyledPaper} maxWidth='sm' className={styles.paper}>
            <TwitchForm />
        </Container>
    )
}