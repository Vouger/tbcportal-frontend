import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { TRoutes } from 'shared/types'

function PrivateRoute({ isAuth, component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuth ? (
                    <Component/>
                ) : (
                    <Redirect
                        to={{
                            pathname: TRoutes.LOGIN,
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
}

PrivateRoute.propTypes = {
    isAuth: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    isAuth: state.user.isAuth
})

export default connect(mapStateToProps)(PrivateRoute)
