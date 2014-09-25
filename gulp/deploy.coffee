gulp   = require 'gulp'
$      = require './utils/plugins'

gulp.task 'deploy', ['usemin'], ->
  gulp.src($.paths.images.final, {base: './'})
    .pipe gulp.dest($.paths.build)
