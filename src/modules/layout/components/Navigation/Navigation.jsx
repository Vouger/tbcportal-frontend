import React from "react";
import PropTypes from "prop-types";
import {Divider, Grid} from "@material-ui/core";

import {TRoles, TRoutes} from "shared/types";

import MenuLink from "../MenuLink/MenuLink";

function Navigation({isAuth, role}) {
    return (
        <Grid container>
            <MenuLink to={TRoutes.MAIN}>
                Главная
            </MenuLink>
            <MenuLink to={TRoutes.NEWS}>
                Новости
            </MenuLink>
            <MenuLink to={TRoutes.GUIDES}>
                Гайды
            </MenuLink>
            {isAuth && (role === TRoles.ADMIN) && (
                <>
                    <Divider orientation="vertical" flexItem />
                    <MenuLink to={TRoutes.STREAMERS}>
                        Стримеры
                    </MenuLink>
                    <MenuLink to={TRoutes.ADMIN_SETTINGS}>
                        Настройки
                    </MenuLink>
                    <MenuLink to={TRoutes.ADMIN_APPROVE}>
                        Подтверждение
                    </MenuLink>
                </>
            )}
        </Grid>
    )
}

Navigation.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    role: PropTypes.string.isRequired
}

export default Navigation;