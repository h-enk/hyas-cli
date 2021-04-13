const shell = require('shelljs')

exports.command = 'add [file]'
exports.desc = 'Add content file'
exports.builder = {}
exports.handler = function (argv) {

  var file
  file = argv.file

  if (shell.which('yarn')) {
    shell.exec('yarn create ' + file)
  } else {
    shell.exec('npm run create ' + file)
  }
  shell.exit(1)

}
