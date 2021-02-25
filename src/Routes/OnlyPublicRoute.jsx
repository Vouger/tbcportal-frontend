import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { TRoutes } from '../shared/types'

function OnlyRoute({ isAuth, component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={() =>
                isAuth ? (
                    <Redirect
                        to={TRoutes.MAIN}
                    />
                ) : (
                    <Component/>
                )
            }
        />
    )
}

const mapStateToProps = state => ({
    isAuth: state.user.isAuth
})

export default connect(mapStateToProps)(OnlyRoute)
