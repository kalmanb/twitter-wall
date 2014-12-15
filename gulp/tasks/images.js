  var gulp       = require('gulp');
  //var changed    = require('gulp-changed');
  //var imagemin   = require('gulp-imagemin');
  //var config     = require('../config').images;

  gulp.task('images', function() {
  var changed    = require('gulp-changed');
  var imagemin   = require('gulp-imagemin');
  var config     = require('../config').images;
    return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest(config.dest));
  });

