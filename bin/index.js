#!/usr/bin/env node
// const shell = require('shelljs')
// const chalk = require('chalk')

// Source: https://github.com/netlify/cli/blob/main/src/index.js
const updateNotifier = require('update-notifier')
const pkg = require('../package.json')
// const UPDATE_CHECK_INTERVAL = 1000 * 60 * 60 * 24, // 1 day
const UPDATE_CHECK_INTERVAL = 432e5 // 12 hours
// const UPDATE_CHECK_INTERVAL = 0 // immediately

try {
  updateNotifier({
    pkg,
    updateCheckInterval: UPDATE_CHECK_INTERVAL,
  }).notify({
    isGlobal: true,
  })
} catch (error) {
  console.log('Error checking for updates:')
  console.log(error)
}

require('yargs/yargs')(process.argv.slice(2))
  .scriptName('')
  .usage(pkg.description + '\n\nUsage: hyas <command> [options]')
  .commandDir('../lib/commands')
  .showHelpOnFail(true)
  .demandCommand(1, '')
  .strictCommands()
  .version('version', 'Show ' + pkg.name + ' version', pkg.name + ' v' + pkg.version)
  // .alias('version', 'v')
  .describe('help', 'Show help for command')
  // .alias('help', 'h')
  // .alias('theme', 't')
  // .alias('starter', 's')
  .epilogue('Learn more:\n  Use \'hyas <command> --help\' for more information about a command.\n  Read the manual at https://cli.gethyas.com')
  .parse()
