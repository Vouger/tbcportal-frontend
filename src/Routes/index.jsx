import React from "react";
import { Route, Switch } from 'react-router-dom'

import { TRoutes } from 'shared/types'

import OnlyPublicRoute from "./OnlyPublicRoute";
import PrivateRoute from './PrivateRoute'

import Landing from '../pages/Landing'
import Login from '../pages/Login'
import Registration from '../pages/Registration'
import Confirmation from '../pages/Confirmation'
import Password from '../pages/Password'
import ChangePassword from '../pages/ChangePassword'
import Notification from '../pages/Notification'
import Guides from '../pages/Guides'
import Guide from '../pages/Guide'
import GuidesSubmit from '../pages/GuidesSubmit'
import Profile from "../pages/Profile";
import AdminPanel from "../pages/AdminPanel";
import AdminTwitchAdd from "pages/AdminTwitchAdd";
import Post from '../pages/Post'

function Routes() {
        return (
        <Switch>
            <OnlyPublicRoute exact path={TRoutes.LOGIN} component={Login}/>
            <OnlyPublicRoute exact path={TRoutes.SIGNUP} component={Registration}/>

            <OnlyPublicRoute exact path={TRoutes.CONFIRMATION()} component={Confirmation}/>

            <OnlyPublicRoute exact path={TRoutes.PASSWORD} component={Password}/>
            <OnlyPublicRoute exact path={TRoutes.PASSWORD_TOKEN()} component={ChangePassword}/>

            <OnlyPublicRoute exact path={TRoutes.NOTIFICATION()} component={Notification}/>

            <Route exact path={TRoutes.MAIN} component={Landing} />
            <Route exact path={TRoutes.GUIDES} component={Guides} />
            <Route exact path={TRoutes.COMMUNITY} component={Guides} />

            <PrivateRoute exact path={TRoutes.GUIDES_SUBMIT} component={GuidesSubmit} />
            <PrivateRoute exact path={TRoutes.PROFILE} component={Profile} />

            <PrivateRoute exact path={TRoutes.ADMIN_PANEL} component={AdminPanel} />
            <PrivateRoute exact path={TRoutes.ADD_TWITCH_ADMIN} component={AdminTwitchAdd} />
            <PrivateRoute exact path={TRoutes.EDIT_TWITCH_ADMIN()} component={AdminTwitchAdd}/>

            <Route exact path={TRoutes.GUIDE()} component={Guide} />
            <Route exact path={TRoutes.POST()} component={Post} />
        </Switch>
    )
}

export default Routes