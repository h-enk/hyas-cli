const shell = require('shelljs')

exports.command = 'start'
exports.desc = 'Start local development server'
exports.builder = {}
exports.handler = function () {

  if (shell.which('yarn')) {
    shell.exec('yarn start')
  } else {
    shell.exec('npm run start')
  }
  shell.exit(1)

}
