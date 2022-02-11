const fs = require('fs')
const path = require('path')
const { repeat, defaultsDeep } = require('lodash')

const env = process.env.NODE_ENV || 'development'

let workSpaceRoot = ''
let i = 0

while (!workSpaceRoot) {
  const root = path.resolve(process.cwd(), repeat('../', i))
  i += 1
  if (fs.existsSync(path.resolve(root, './config/default.json'))) {
    workSpaceRoot = root
  }
}

const defaultConfigPath = path.resolve(workSpaceRoot, './config/default.json')
const envConfigPath = path.resolve(workSpaceRoot, `./config/${env}.json`)

let envConfig = require(envConfigPath)
let defaultConfig = require(defaultConfigPath)

const config = defaultsDeep(envConfig, defaultConfig)

module.exports = config
