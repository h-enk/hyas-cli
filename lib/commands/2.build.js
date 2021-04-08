const shell = require('shelljs')

exports.command = 'build'
exports.desc = 'Build production website'
exports.builder = {}
exports.handler = function () {

  if (shell.which('yarn')) {
    shell.exec('yarn build')
  } else {
    shell.exec('npm run build')
  }
  shell.exit(1)

}
