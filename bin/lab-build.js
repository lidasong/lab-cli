#!/usr/bin/env node
'use strict'

const runBuild = require('../util/build')

// set env = production
process.env.NODE_ENV = 'production'

runBuild()
