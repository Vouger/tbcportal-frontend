export class TRoutes {
    static MAIN = '/'
    static LOGIN = '/login'
    static SIGNUP = '/signup'
    static PASSWORD = '/password'

    static CONFIRMATION = (token = ':token') => `/confirmation/${token}`
    static PASSWORD_TOKEN = (token = ':token') => `/password/${token}`
    static NOTIFICATION = (template = ':template') => `/notification/${template}`

    static GUIDES = '/guides'
    static COMMUNITY = '/community'
}