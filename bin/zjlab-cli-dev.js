#!usr/bin/env node

const runDev = require('../util/dev')

// set env = development
process.env.NODE_ENV = 'development'

runDev()
