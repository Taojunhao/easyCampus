'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_APP_PRO_SERVER: '"http://172.20.10.2:8080"', // 业务后台接口
  BASE_APP_AUTH_SERVER: '"http://172.20.10.2:8081"', // 业务后台接口
})
