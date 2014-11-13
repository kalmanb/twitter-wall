var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var rimraf = require('gulp-rimraf');

var handleErrors = require('../util/handleErrors');

var config = require('../config').scss;

gulp.task('scss', function () {
  return gulp.src(config.src)
  .pipe(sass())
  .on('error', handleErrors)
  .pipe(gulp.dest(config.dest));
});

gulp.task('clean:scss', function() {
  gulp.src('./build/css', { read: false }) // much faster
  .pipe(rimraf({force: true}));
})

