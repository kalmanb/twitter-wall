var gulp = require('gulp');
var handleErrors = require('../util/handleErrors');
var karma   = require('karma').server;

var config = require('../config');

//var compile = $.lazypipe()
  //.pipe($.plumber, {errorHandler: onError})
  //.pipe($.coffee, {bare: true})
  //.pipe(gulp.dest, $.paths.test.unit.dest)

//regexCoffee = /coffee$/

//changedCoffee = (file)->
  //if regexCoffee.test(file.path)
    //'changed' == file.event
  //else
    //true
  

gulp.task('unit', ['js:unit'], function(done) {
  karma.start({configFile: process.cwd() + '/test/karma.conf.js'}, done)
})

gulp.task('js:unit', ['clean:unit', 'typescript'], function() {
  //gulp.src($.paths.test.unit.coffee)
    //.pipe(compile())
})

gulp.task('clean:unit', function() {
  //gulp.src(config.testScripts.src, {read: false})
    //.pipe($.rimraf())
})

//gulp.task 'watch:karma', ['coffee:unit'], (done)->
  //karma.start {configFile: process.cwd() + '/test/karma.conf.js', singleRun: false, autoWatch: true}, done

//gulp.task 'watch:unit:coffee', ->
  //$.watch($.paths.test.unit.coffee, {name: 'Unit'})
    //.pipe($.filter($.filters.changed))
    //.pipe(compile())

//gulp.task 'unit:watch', ['watch:karma', 'watch:unit:coffee', 'watch:coffee']

