const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig(
  {
    transpileDependencies: true
  },
  { publicPath: '/vue_demo_site/', outputDir: 'docs' }
)
