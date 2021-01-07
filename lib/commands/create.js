const shell = require('shelljs')
const chalk = require('chalk')

exports.command = 'create [dir] [--theme]'

exports.desc = 'Create a new Hyas project'
exports.builder = {
  doks: {
    default: 'hyas'
  }
}
exports.handler = function (argv) {
  var dir
  dir = argv.dir || 'my-hyas-site'

  if (shell.test('-e', dir)) {
    shell.echo(chalk.red('Directory \'' + dir + '\' is not empty.'))
    shell.exit(1)
  }

  var repo
  var argv = require('yargs/yargs')(process.argv.slice(2)).argv;
  if (argv.doks) {
    shell.echo('Creating Doks project...');
    repo = 'doks'
  } else {
    shell.echo('Creating Hyas project...');
    repo = 'hyas'
  }

  if (shell.exec('git clone --depth=1 git@github.com:h-enk/' + repo + '.git ' + dir).code !== 0) {
    shell.exit(1)
  } else {
    shell.rm('-rf', dir + '/.git');
    shell.rm('-rf', dir + '/.github');
    shell.cd(dir)

    shell.echo('Installing dependencies...')
    if (shell.which('yarn')) {
      shell.exec('yarn install')
    } else {
      shell.exec('npm install')
    }

    shell.echo('\n  - Enter directory ' + chalk.cyan('cd ' + dir))
    shell.echo('  - Run ' + chalk.cyan('hyas start') + ' to start local development')
    shell.echo('  - Run ' + chalk.cyan('hyas build') + ' to build for production\n')

  }
}
