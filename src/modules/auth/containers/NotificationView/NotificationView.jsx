import React from 'react'
import { useParams } from "react-router-dom";

import NotificationMessage from "modules/auth/components/NotificationMessage/NotificationMessage";

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
        <NotificationMessage message={getNotification(template)} />
    )
}