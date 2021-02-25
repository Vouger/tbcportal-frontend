import { getToken } from "../../shared/helpers";

const name = 'user'
const LOG_IN = `${name}/LOG_IN`
const CLEAN = `${name}/CLEAN`
const token = getToken()

const initialState = () => ({
    isAuth: !!token,
})

export default function reducer(state = initialState(), action = {}) {
    const { payload } = action
    switch (action.type) {
        case LOG_IN: {
            return {
                ...state,
                isAuth: true,
                ...payload
            }
        }

        case CLEAN: {
            return {
                ...state,
                ...initialState(),
                isAuth: false
            }
        }

        default: {
            return state
        }
    }
}

export function logIn() {
    return {
        type: LOG_IN
    }
}

export function clean() {
    return {
        type: CLEAN
    }
}