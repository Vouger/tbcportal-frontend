export class TRoutes {
    static MAIN = '/'
    static LOGIN = '/login'
    static SIGNUP = '/signup'
    static PASSWORD = '/password'

    static CONFIRMATION = (token = ':token') => `/confirmation/${token}`
    static PASSWORD_TOKEN = (token = ':token') => `/password/${token}`
    static NOTIFICATION = (template = ':template') => `/notification/${template}`
    static GUIDE = (id = ':id') => `/guide/${id}`
    static POST = (id = ':id') => `/post/${id}`

    static GUIDES = '/guides'
    static COMMUNITY = '/community'
    static ADD_GUIDE = '/guides/add'
    static PROFILE = '/profile'

    static ADD_POST = '/posts/add'

    static STREAMERS = '/admin/twitch'
    static ADD_STREAMER = '/admin/twitch/add'
    static EDIT_STREAMER = (id = ':id') => `/admin/twitch/${id}`
}

export class TRoles {
    static USER = 'User'
    static ADMIN = 'Admin'
}