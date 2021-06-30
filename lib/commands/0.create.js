const shell = require('shelljs')
const chalk = require('chalk')

exports.command = 'create [dir]'
exports.desc = 'Create a new Hyas project'
exports.builder = {
  child: {
    describe: 'Use child theme',
  },
  theme: {
    describe: 'Use Hyas theme [slug]',
  },
}
exports.handler = function (argv) {
  var dir
  dir = argv.dir || 'my-hyas-site'

  var theme
  theme = argv.theme || ''

  var child
  child = argv.child

  if (shell.test('-e', dir)) {
    shell.echo(chalk.red('Directory \'' + dir + '\' is not empty.'))
    shell.exit(1)
  }

  var repo
  if (theme === 'doks') {
    shell.echo('Creating Doks project...');
    repo = 'doks'
  } else {
    shell.echo('Creating Hyas project...');
    repo = 'hyas'
  }

  var append
  if (child === true) {
    shell.echo('Using child theme...');
    append = '-child-theme'
  } else {
    shell.echo('Using starter theme...');
    append = ''
  }

  repo = repo + append

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
