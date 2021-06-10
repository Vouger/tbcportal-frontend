import store from '../redux'
import { clean as userStoreClean } from '../redux/ducks/user'

export function setAuth({token, role}) {
    localStorage.setItem('auth', JSON.stringify({ token, role }))
}

export function getAuth() {
    return JSON.parse(localStorage.getItem('auth') || '{}')
}

export function cleanAuth() {
    localStorage.removeItem('auth')

    store.dispatch(userStoreClean())
}

export function buildUrl(url, params) {
    const searchParams = new URLSearchParams(params);

    return url + '?' + searchParams;
}