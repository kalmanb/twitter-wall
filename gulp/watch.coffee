gulp   = require 'gulp'
$      = require './utils/plugins'

gulp.task 'watch:html', ->
  consequences = []
  if $.config.live
    consequences.push 'sync:reload'
  $.watch(['./index.html', $.paths.templates.all], {name: 'Html'}, (files, cb)->
    gulp.start consequences, cb
  )

gulp.task 'watch', ['watch:coffee', 'watch:scss', 'watch:html']
