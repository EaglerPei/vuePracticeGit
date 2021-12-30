module.exports = {
    configureWebpack: {
        resolve: {
            // extension:[], //内部已默认配置
            alias: {
                // router和store不需要配置，因为可以通过$获取。
                // '@':'src', //内部已默认配置
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}
