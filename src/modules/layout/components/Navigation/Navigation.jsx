import React from "react";

import MenuLink from "../MenuLink/MenuLink";
import {TRoutes} from "../../../../shared/types";

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