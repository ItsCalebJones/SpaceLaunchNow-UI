// interface
export type MenuRoute = {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    submenu: Array<MenuRoute>,
}

export const routes: Array<MenuRoute> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        submenu: null,
    },
    {
        key: 'launch-route',
        title: 'Launches',
        path: '/launch',
        enabled: true,
        submenu: [
            {
                key: 'launch-upcoming-route',
                title: 'Upcoming Launches',
                path: '/launch/upcoming',
                enabled: true,
                submenu: null,
            }, 
            {
                key: 'launch-previous-route',
                title: 'Previous Launches',
                path: '/launch/previous',
                enabled: true,
                submenu: null,
            }, 
            {
                key: null,
                title: null,
                path: null,
                enabled: true,
                submenu: null,
            }, 
            {
                key: 'launch-spacex-route',
                title: 'SpaceX',
                path: '/launch/spacex',
                enabled: true,
                submenu: null,
            }, 
            {
                key: 'launch-vandenberg-route',
                title: 'Vandenberg',
                path: '/launch/vandenberg',
                enabled: true,
                submenu: null,
            }, 
            {
                key: 'launch-florida-route',
                title: 'Florida',
                path: '/launch/florida',
                enabled: true,
                submenu: null,
            }, 
            {
                key: null,
                title: null,
                path: null,
                enabled: true,
                submenu: null,
            }, 
            {
                key: 'launch-database-route',
                title: 'Launch Database',
                path: '/launch/database',
                enabled: true,
                submenu: null,
            }, 
        ],
    },
    {
        key: 'about-route',
        title: 'About',
        path: '/about',
        enabled: true,
        submenu: null,
    },
    {
        key: 'starship-route',
        title: 'Starship',
        path: '/starship',
        enabled: true,
        submenu: null,
    }
]