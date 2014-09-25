gulp    = require 'gulp'
karma   = require('karma').server
$       = require './utils/plugins'
onError = require './utils/onError'

gulp.task 'clean:unit', ->
  gulp.src($.paths.test.unit.all, {read: false})
    .pipe($.rimraf())

compile = $.lazypipe()
  .pipe($.plumber, {errorHandler: onError})
  .pipe($.coffee, {bare: true})
  .pipe(gulp.dest, $.paths.test.unit.dest)

regexCoffee = /coffee$/

changedCoffee = (file)->
  if regexCoffee.test(file.path)
    'changed' == file.event
  else
    true

gulp.task 'coffee:unit', ['clean:unit', 'coffee'], ->
  gulp.src($.paths.test.unit.coffee)
    .pipe(compile())

gulp.task 'unit', ['coffee:unit'], (done)->
  karma.start {configFile: process.cwd() + '/test/karma.conf.js'}, done

gulp.task 'watch:karma', ['coffee:unit'], (done)->
  karma.start {configFile: process.cwd() + '/test/karma.conf.js', singleRun: false, autoWatch: true}, done

gulp.task 'watch:unit:coffee', ->
  $.watch($.paths.test.unit.coffee, {name: 'Unit'})
    .pipe($.filter($.filters.changed))
    .pipe(compile())

gulp.task 'unit:watch', ['watch:karma', 'watch:unit:coffee', 'watch:coffee']
