#!/usr/bin/env node
const shell = require('shelljs')
const chalk = require('chalk')

const updateNotifier = require('update-notifier')
const pkg = require('../package.json')
const notifier = updateNotifier({
  pkg,
  // updateCheckInterval: 0,
  // updateCheckInterval: 1000 * 60 * 60 * 24 * 7, // 1 week
  updateCheckInterval: 1000 * 60 * 60 * 24, // 1 day
  shouldNotifyInNpmScript: true,
});

if (notifier.update) {
  const withYarn = shell.which('yarn')
  const margin = chalk.bgGreen(' ')
  const command = withYarn ? `yarn global add ${pkg.name}` : `npm i -g ${pkg.name}`
  console.log()
  console.log(`${margin} Update available: ${chalk.bold(notifier.update.latest)}`)
  console.log(`${margin} Run ${chalk.cyan(command)} to update`)
  console.log()
}

require('yargs')
  .usage('Usage: hyas <command> [options]')
  .commandDir('../lib/commands')
  .scriptName('')
  .showHelpOnFail(true)
  .version('version', 'Show version number', '@hyas/cli v0.3.0')
  .alias('version', 'v')
  .alias('help', 'h')
  .epilogue('Run ' + chalk.cyan('hyas <command> --help') + ' for detailed usage of given command.')
  .parse()
