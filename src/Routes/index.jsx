import { Route, Switch } from 'react-router-dom'

import { TRoutes } from '../shared/types'
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
        </Switch>
    )
}

export default Routes