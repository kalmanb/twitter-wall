var gulp = require('gulp');
var config= require('../config').web;

gulp.task('html', function() {
  gulp.src(config.html.src).pipe(gulp.dest(config.html.dest));
});

gulp.task('clean:html', function() {
  var rimraf = require('gulp-rimraf');

  gulp.src(config.html.src, { read: false }) // much faster
  .pipe(rimraf({force: true}));
})
