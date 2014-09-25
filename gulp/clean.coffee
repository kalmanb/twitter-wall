gulp   = require 'gulp'
$      = require './utils/plugins'

gulp.task 'clean', ['clean:scripts', 'clean:styles']

gulp.task 'clean:test', ['clean:test:spec', 'clean:test:e2e']
