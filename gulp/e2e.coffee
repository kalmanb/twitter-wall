gulp    = require 'gulp'
$       = require './utils/plugins'
onError = require './utils/onError'

gulp.task 'clean:e2e', ->
  gulp.src($.paths.test.e2e.all, {read: false})
    .pipe($.rimraf())

protractor = $.lazypipe()
  .pipe($.protractor.protractor, {
    configFile: './test/protractor.config.js'
  })

compile = $.lazypipe()
  .pipe($.plumber, {errorHandler: onError})
  .pipe($.coffee, {bare: true})
  .pipe($.header, 'require(\'' + process.cwd() + '/test/protractor.adapter.js\');\n\n')
  .pipe(gulp.dest, $.paths.test.e2e.dest)

gulp.task 'coffee:e2e', ['clean:e2e'], ->
  gulp.src($.paths.test.e2e.coffee)
    .pipe(compile())

gulp.task 'e2e', ['coffee:e2e'], ->
  gulp.src($.paths.test.e2e.all)
    .pipe($.plumber({errorHandler: onError}))
    .pipe(protractor())


gulp.task 'e2e:watch', ['clean:e2e'], ->
  $.watch($.paths.test.e2e.coffee, {name: 'E2E'}, (files)->
    files
      .pipe(compile())
      .pipe(protractor())
      # .pipe($.if($.filters.changed, protractor(), $.filter($.filters.log)))
  )
