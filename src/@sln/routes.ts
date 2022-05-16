// interface
interface MenuRoute {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
}

export const routes: Array<MenuRoute> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
    },
    {
        key: 'about-route',
        title: 'About',
        path: '/about',
        enabled: true,
    },
    {
        key: 'starship-route',
        title: 'Starship',
        path: '/starship',
        enabled: true,
    }
]