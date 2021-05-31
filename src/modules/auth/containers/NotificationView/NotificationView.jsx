import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { useParams } from "react-router-dom";

import styles from './NotificationView.module.scss'

export default function NotificationView() {
    const { template } = useParams()

    const getNotification = param => {
        switch (param) {
            case 'confirmation':
                return "Для завершения регистрации нужно подтвердить имейл. Письмо с ссылкой на подверждение отправлено на ваш имейл"

            case 'password_request':
                return "Письмо с инструкциями по смене пароля отправлено на ваш имейл"

            default:
                return "Ошибка"
        }
    }

    return (
        <Paper className={styles.root}>
            <Typography variant="h5" gutterBottom>
                {getNotification(template)}
            </Typography>
        </Paper>
    )
}