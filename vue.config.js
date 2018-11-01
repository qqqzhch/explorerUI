module.exports = {
  chainWebpack: config => {
    // GraphQL Loader
    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('iview-loader')
      .loader('iview-loader')
      .tap(options => {
        // 修改它的选项...
        return {
          prefix: false
        }
      })
      .end()
  }
}
