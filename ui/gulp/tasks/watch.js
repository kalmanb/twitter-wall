var gulp = require('gulp');

gulp.task('setWatch', function() {
  global.isWatching = true;
});

gulp.task('watch', ['setWatch', 'browserSync'], function() {
  var config= require('../config').web;

  gulp.watch(config.html.src, ['html']);
  gulp.watch(config.scss.src,   ['scss']);
  gulp.watch(config.scripts.src, ['scripts']);
});
