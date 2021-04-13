const shell = require('shelljs')

exports.command = 'lint [source]'
exports.desc = 'Check for errors'
exports.builder = {
  fix: {
    describe: 'Fix issues automatically',
  },
}
exports.handler = function (argv) {

  var source
  source = argv.source || ''

  var delimiter
  var sources = ['scripts', 'styles', 'markdown'];
  if (sources.indexOf(source) !== -1) {
    delimiter = ':'
  } else {
    delimiter = ''
    source = ''
  }

  var fix
  fix = argv.fix

  var append
  if (fix === true) {
    append = ' -- --fix'
  } else {
    append = ''
  }

  source = delimiter + source + append

  if (shell.which('yarn')) {
    shell.exec('yarn lint' + source)
  } else {
    shell.exec('npm run lint' + source)
  }
  shell.exit(1)

}
