import React from 'react'
import { Paper, Grid, Typography } from '@material-ui/core'
import { useParams } from "react-router-dom";

import Layout from "../../../layout/containers/Layout/Layout";
import styles from './NotificationView.module.scss'

export default function NotificationView() {
    const { template } = useParams()

    const getNotification = param => {
        switch (param) {
            case 'confirmation':
                return "To complete registration you need to confirm your email. Email was sent to your email with confirmation link."

            case 'password_request':
                return "Email was sent with link to change password"

            default:
                return "Error"
        }
    }

    return (
        <Layout>
            <Grid item xs={12}>
                <Paper>
                    <Typography variant="h5" gutterBottom>
                        {getNotification(template)}
                    </Typography>
                </Paper>
            </Grid>
        </Layout>
    )
}