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
    static ADMIN_SETTINGS = '/admin/settings'
}

export class TRoles {
    static USER = 'User'
    static ADMIN = 'Admin'
}

export class TBanner {
    static FIELDS = ["bannerImage", "bannerTitle", "bannerText", "bannerLink", "bannerLinkText"]
}
export class TPagination {
    static GUIDES_DEFAUT = 12;
    static GUIDES_LG = 8;
    static GUIDES_SM = 5;
}