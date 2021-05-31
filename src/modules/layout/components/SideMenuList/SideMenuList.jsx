import React from "react";
import { Link } from "react-router-dom";
import { Else, If, Then } from "react-if";
import { Divider, List } from "@material-ui/core";
import { AccountCircle, Dashboard, ExitToApp, Home, SupervisorAccount } from "@material-ui/icons";

import { TRoles, TRoutes } from "shared/types";
import { cleanAuth } from "shared/helpers";

import SideMenuItem from "../SideMenuItem/SideMenuItem";

export default function SideMenuList (props) {
    const handleLogout = () => {
        cleanAuth();
    }

    return (
        <List>
            <SideMenuItem component={Link} to={TRoutes.MAIN} label="Главная" icon={Home} />
            <SideMenuItem component={Link} to={TRoutes.GUIDES} label="Гайды" icon={Dashboard} />

            <Divider />

            <If condition={props.isAuth}>
                <Then>
                    <If condition={props.role === TRoles.ADMIN}>
                        <Then>
                            <SideMenuItem component={Link} to={TRoutes.STREAMERS} label="Стримеры" icon={SupervisorAccount} />
                            <SideMenuItem component={Link} to={TRoutes.ADMIN_SETTINGS} label="Настройки" icon={SupervisorAccount} />
                            <SideMenuItem component={Link} to={TRoutes.ADMIN_APPROVE} label="Подтверждение" icon={SupervisorAccount} />
                            <Divider />
                        </Then>
                    </If>

                    <SideMenuItem component={Link} to={TRoutes.PROFILE} label="Профиль" icon={AccountCircle} />
                    <SideMenuItem onClick={handleLogout} label="Выйти" icon={ExitToApp} />
                </Then>
                <Else>
                    <SideMenuItem component={Link} to={TRoutes.LOGIN} label="Войти" icon={AccountCircle} />
                </Else>
            </If>
        </List>
    )
}