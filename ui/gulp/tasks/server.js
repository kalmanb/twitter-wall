var gulp  = require('gulp');
var server = require('gulp-express');
var config= require('../config').server;

gulp.task('server', ['server:jshint', 'server:compile', 'server:run', 'server:watch']);

gulp.task('server:run', function () {
  server.run({
    file: config.scripts.dest.root
  });
});

gulp.task('server:watch', function () {
  gulp.watch([config.scripts.src], ['server:compile']);
  gulp.watch([config.scripts.dest.js], ['server:jshint']);
  gulp.watch([config.scripts.dest.js], ['server:run']);
});

gulp.task('server:jshint', function () {
  var jshint = require('gulp-jshint');

  return gulp.src(config.scripts.src)
  .pipe(jshint('.jshintrc-server'))
  .pipe(jshint.reporter('jshint-stylish'))
  .pipe(jshint.reporter('fail'));
});


gulp.task('server:compile', function () {
  var traceur = require('gulp-traceur');

  return gulp.src(config.scripts.root)
  .pipe(traceur())
  .pipe(gulp.dest(config.scripts.dest.dir));
});
