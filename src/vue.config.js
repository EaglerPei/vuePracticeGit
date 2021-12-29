module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/asssets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}