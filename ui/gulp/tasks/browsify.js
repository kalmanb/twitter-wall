var gulp = require('gulp');


gulp.task('scripts', function() {
  var browserify = require('gulp-browserify');
  var traceur = require('gulp-traceur');
  var config = require('../config').web;

  gulp.src(config.scripts.dir + 'app.js', { read: false })
  .pipe(browserify({
    insertGlobals : true,
    debug : true
  }))
  .pipe(traceur())
  .pipe(gulp.dest(config.scripts.dest))
});

