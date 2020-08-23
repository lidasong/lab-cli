#!/usr/bin/env node
'use strict'

const program = require('commander')
console.log(program)

program
  .usage('<command> [options]')
  .version(require('../package.json').version)
  .command('dev', 'Development mode')
  .command('build', 'Production mode')
  .command('analyze', 'Analyzer for stats')
  .parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
}
