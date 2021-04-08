import React from "react";

import {TRoutes} from "shared/types";

import MenuLink from "../MenuLink/MenuLink";

export default function Navigation(props) {
    return (
        <>
            <MenuLink to={TRoutes.MAIN}>
                Home
            </MenuLink>
            <MenuLink to={TRoutes.GUIDES}>
                Guides
            </MenuLink>
            <MenuLink to={TRoutes.COMMUNITY}>
                Community
            </MenuLink>
        </>
    )
}