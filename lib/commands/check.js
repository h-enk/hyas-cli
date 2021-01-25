const shell = require('shelljs')

exports.command = 'check'
exports.desc = 'Check local environment'
exports.builder = {}
exports.handler = function () {

  if (shell.which('yarn')) {
    shell.exec('yarn check')
  } else {
    shell.exec('npm run check')
  }
  shell.exit(1)

}
