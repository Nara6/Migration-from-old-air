const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer:{
    port: 8081,
    proxy: {
      '^/api': {
        //target: "http://139.59.237.195:3001",
        target: "http://localhost:3001",
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/'}
      }
    } 
  }
})
