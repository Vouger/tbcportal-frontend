import store from '../redux'
import { clean as userStoreClean } from '../redux/ducks/user'

export function setToken(token) {
    localStorage.setItem('token', token)
}

export function getToken() {
    return localStorage.getItem('token');
}

export function cleanToken() {
    localStorage.removeItem('token')

    store.dispatch(userStoreClean())
}