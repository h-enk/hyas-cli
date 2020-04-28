var shell = require('shelljs')
const chalk = require('chalk')

exports.command = 'create [dir]'
exports.desc = 'Create a new website in [dir]'
exports.builder = {}
exports.handler = function (argv) {
  var dir
  dir = argv.dir || 'my-hyas-site'

  if (shell.test('-e', dir)) {
    shell.echo(chalk.red('Directory \'' + dir + '\' is not empty.'))
    shell.exit(1)
  }

  if (shell.exec('git clone --depth=1 git@github.com:h-enk/hyas.git ' + dir).code !== 0) {
    shell.exit(1)
  } else {
    shell.exec('rm -rf ' + dir + '/.git')
    shell.cd(dir)

    shell.echo('Installing dependencies...')
    if (shell.which('yarn')) {
      shell.exec('yarn install')
    } else {
      shell.exec('npm install')
    }

    shell.echo('\n  - Enter directory ' + chalk.blue('cd ' + dir))
    shell.echo('  - Run ' + chalk.blue('hyas start') + ' to start local development')
    shell.echo('  - Run ' + chalk.blue('hyas build') + ' to build for production\n')
  }
}
