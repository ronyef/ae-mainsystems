module.exports = {
    title: 'Auto Electric Series',
    description: 'Dasar Automotive Electric',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Battery', link: '/battery/' },
            { text: 'Charging', link: '/charging/' },
            { text: 'Starting', link: '/starting/' },
            { text: 'Others', link: 'https://google.com' }
        ],
        sidebar: {
            '/battery/': [
                '',
                'charging',
                'maintenance'
            ],
            '/charging/': [
                '',
                'operation',
                'maintenance'
            ]
        },
        sidebarDepth: 2
    },
    plugins: ['@vuepress/back-to-top']
}