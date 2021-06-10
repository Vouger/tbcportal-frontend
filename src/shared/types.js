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

    static AUTH_CALLBACK = (source = ':source') => `/auth/${source}/callback`
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
    static POSTS_DEFAULT = 8;
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

export class TLabels {
    static SITE_NAME = "Vanilla LFG"
    static SITE_DESCRIPTION = "Vanillalfg.com - это новости и гайды по классическим версиям World Of Warcraft"
    static SITE_KEYWORDS = [
        "world of warcraft",
        "wow",
        "vanilla wow",
        "classic wow",
        "tbc wow",
        "tbc classic",
        "the burning crusade",
        "the burning crusade classic",
        "warcraft",
        "стримы",
        "гайды",
        "новости wow"
    ]

    static CLASS_KEYWORDS = {
        'druid':   ['druid', 'друид', 'гайд друид'],
        'hunter':  ['hunter', 'охотник', 'гайд охотник'],
        'mage':    ['mage', 'маг', 'гайд маг'],
        'paladin': ['paladin', 'паладин', 'гайд паладин'],
        'priest':  ['priest', 'жрец', 'прист', 'гайд жрец', 'гайд прист'],
        'rogue':   ['rogue', 'разбойник', 'гайд разбойник'],
        'shaman':  ['shaman', 'шаман', 'гайд шаман'],
        'warlock': ['warlock', 'чернокнижник', 'варлок', 'лок', 'гайд чернокнижник', 'гайд варлок', 'гайд лок'],
        'warrior': ['warrior', 'воин', 'гайд воин'],
    }
}
