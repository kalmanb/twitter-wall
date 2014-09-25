gulp    = require 'gulp'
$       = require './utils/plugins'
onError = require './utils/onError'

gulp.task 'clean:scripts', ->
  gulp.src($.paths.scripts.all, {read: false})
    .pipe($.rimraf())

compile = $.lazypipe()
  .pipe($.plumber, {errorHandler: onError})
  .pipe($.coffee, {bare: true})
  .pipe($.ngAnnotate)
  .pipe(gulp.dest, $.paths.scripts.dest)
  .pipe(()->
    $.if($.config.live, $.reloadStream())
  )

gulp.task 'coffee', ['clean:scripts'], ->
  gulp.src($.paths.coffee.all).pipe(compile())

gulp.task 'watch:coffee', ['coffee'], ->
  $.watch($.paths.coffee.all, {name: 'Coffee'})
    .pipe(compile())
