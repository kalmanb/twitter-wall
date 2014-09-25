gulp    = require 'gulp'
$       = require './utils/plugins'

gulp.task 'usemin', ['build'], ->
  gulp.src(['./index.html', $.paths.templates.all], {base: './'})
    .pipe($.usemin({
      css: [$.minifyCss(), 'concat', $.rev()],
      html: [$.minifyHtml({empty: true})],
      js: [$.uglify(), $.rev()]
    }))
    .pipe(gulp.dest($.paths.build))
