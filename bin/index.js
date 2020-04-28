#!/usr/bin/env node
const chalk = require('chalk')

require('yargs')
  .usage('Usage: hyas <command> [options]')
  .commandDir('../lib/commands')
  .scriptName('')
  .showHelpOnFail(true)
  .alias('version', 'v')
  .alias('help', 'h')
  .epilogue('Run ' + chalk.blue('hyas <command> --help') + ' for detailed usage of given command.')
  .parse()
