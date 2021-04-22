import React from "react";
import PropTypes from "prop-types";

import {TRoles, TRoutes} from "shared/types";

import MenuLink from "../MenuLink/MenuLink";
import {Divider, Grid} from "@material-ui/core";

function Navigation({isAuth, role}) {
    return (
        <Grid container>
            <MenuLink to={TRoutes.MAIN}>
                Home
            </MenuLink>
            <MenuLink to={TRoutes.GUIDES}>
                Guides
            </MenuLink>
            <MenuLink to={TRoutes.COMMUNITY}>
                Community
            </MenuLink>
            {isAuth && (role === TRoles.ADMIN) && (
                <>
                    <Divider orientation="vertical" flexItem />
                    <MenuLink to={TRoutes.STREAMERS}>
                        Streamers
                    </MenuLink>
                    <MenuLink to={TRoutes.ADMIN_SETTINGS}>
                        Settings
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