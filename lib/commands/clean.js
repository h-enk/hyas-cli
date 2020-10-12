const shell = require('shelljs')

exports.command = 'clean'
exports.desc = 'Delete temporary directories'
exports.builder = {}
exports.handler = function () {

  if (shell.which('yarn')) {
    shell.exec('yarn clean')
  } else {
    shell.exec('npm run clean')
  }
  shell.exit(1)

}
