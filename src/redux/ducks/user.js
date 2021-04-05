import { getAuth } from "../../shared/helpers";

const name = 'user'
const LOG_IN = `${name}/LOG_IN`
const CLEAN = `${name}/CLEAN`
const auth = getAuth();

const initialState = () => ({
    isAuth: !!auth.token,
    role: auth.role,
})

export default function reducer(state = initialState(), action = {}) {
    const { payload } = action
    const auth = getAuth();

    switch (action.type) {
        case LOG_IN: {
            return {
                ...state,
                isAuth: !!auth.token,
                role: auth.role,
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