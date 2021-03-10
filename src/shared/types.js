export class TRoutes {
    static MAIN = '/'
    static LOGIN = '/login'
    static SIGNUP = '/signup'
    static PASSWORD = '/password'

    static CONFIRMATION = (token = ':token') => `/confirmation/${token}`
    static PASSWORD_TOKEN = (token = ':token') => `/password/${token}`
    static NOTIFICATION = (template = ':template') => `/notification/${template}`
    static GUIDE = (id = ':id') => `/guide/${id}`

    static GUIDES = '/guides'
    static COMMUNITY = '/community'
    static GUIDES_SUBMIT = '/guides/submit'
    static PROFILE = '/profile'
}