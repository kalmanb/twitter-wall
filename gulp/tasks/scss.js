var gulp = require('gulp');


gulp.task('scss', function () {
  var sass = require('gulp-ruby-sass');
  var handleErrors = require('../util/handleErrors');
  var config = require('../config').scss;

  return gulp.src(config.src)
  .pipe(sass())
  .on('error', handleErrors)
  .pipe(gulp.dest(config.dest));
});

gulp.task('clean:scss', function() {
  var rimraf = require('gulp-rimraf');

  gulp.src('./build/css', { read: false }) // much faster
  .pipe(rimraf({force: true}));
})

