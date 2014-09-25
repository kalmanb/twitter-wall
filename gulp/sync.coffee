gulp = require 'gulp'
$    = require './utils/plugins'

gulp.task 'sync:reload', ->
  $.reload()
