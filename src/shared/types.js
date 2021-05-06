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

    static GUIDES = '/guides'
    static COMMUNITY = '/community'
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
    static GUIDES_DEFAUT = 12;
    static GUIDES_LG = 8;
    static GUIDES_SM = 5;
}

export class TGuidesFilter {
    static CONTENT = [
        { name: 'all', title: 'ALL' },
        { name: 'pve', title: 'PVE' },
        { name: 'pvp', title: 'PVP' },
        { name: 'leveling', title: 'Leveling' },
        { name: 'lore', title: 'Lore' }
    ];

    static CLASS = [
        { name: 'all', title: 'ALL' },
        { name: 'druid', title: 'Druid' },
        { name: 'hunter', title: 'Hunter' },
        { name: 'mage', title: 'Mage' },
        { name: 'paladin', title: 'Paladin' },
        { name: 'priest', title: 'Priest' },
        { name: 'rogue', title: 'Rogue' },
        { name: 'shaman', title: 'Shaman' },
        { name: 'warlock', title: 'Warlock' },
        { name: 'warrior', title: 'Warrior' }
    ];


}
