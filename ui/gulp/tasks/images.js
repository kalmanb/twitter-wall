var gulp       = require('gulp');

gulp.task('images', function() {
  var changed    = require('gulp-changed');
  var imagemin   = require('gulp-imagemin');
  var config     = require('../config').web.images;

  return gulp.src(config.src)
  .pipe(changed(config.dest)) // Ignore unchanged files
  .pipe(imagemin()) // Optimize
  .pipe(gulp.dest(config.dest));
});

