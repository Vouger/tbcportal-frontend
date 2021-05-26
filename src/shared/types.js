export class TRoutes {
    static MAIN = '/'
    static LOGIN = '/login'
    static SIGNUP = '/signup'
    static PASSWORD = '/password'

    static CONFIRMATION = (token = ':token') => `/confirmation/${token}`
    static PASSWORD_TOKEN = (token = ':token') => `/password/${token}`
    static NOTIFICATION = (template = ':template') => `/notification/${template}`
    static GUIDE = (id = ':id', url = ':url') => `/guide/${id}/${url}`
    static POST = (id = ':id', url = ':url') => `/post/${id}/${url}`

    static NEWS = '/news'
    static GUIDES = '/guides'
    static ADD_GUIDE = '/guides/add'
    static PROFILE = '/profile'

    static ADD_POST = '/posts/add'

    static STREAMERS = '/admin/twitch'
    static ADD_STREAMER = '/admin/twitch/add'
    static EDIT_STREAMER = (id = ':id') => `/admin/twitch/${id}`
    static ADMIN_SETTINGS = '/admin/settings'
    static ADMIN_APPROVE = '/admin/approve'
}

export class TRoles {
    static USER = 'User'
    static ADMIN = 'Admin'
}

export class TBanner {
    static FIELDS = ["bannerImage", "bannerTitle", "bannerText", "bannerLink", "bannerLinkText"]
}

export class TPagination {
    static GUIDES_DEFAULT = 12;
    static GUIDES_LG = 8;
    static GUIDES_SM = 5;
    static POSTS_DEFAULT = 12;
    static POSTS_LANDING = 4;
}

export class TGuidesFilter {
    static CONTENT = [
        { name: 'all', title: 'Все' },
        { name: 'pve', title: 'ПВП' },
        { name: 'pvp', title: 'ПВЕ' },
        { name: 'leveling', title: 'Прокачка' },
        { name: 'lore', title: 'Лор' }
    ];

    static CLASS = [
        { name: 'all', title: 'Все' },
        { name: 'druid', title: 'Друид' },
        { name: 'hunter', title: 'Охотник' },
        { name: 'mage', title: 'Маг' },
        { name: 'paladin', title: 'Паладин' },
        { name: 'priest', title: 'Жрец' },
        { name: 'rogue', title: 'Рога' },
        { name: 'shaman', title: 'Шаман' },
        { name: 'warlock', title: 'Лок' },
        { name: 'warrior', title: 'Воин' }
    ];


}
