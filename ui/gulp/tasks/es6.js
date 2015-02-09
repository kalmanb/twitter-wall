var gulp = require('gulp');


gulp.task('scripts', function () {
  var sourcemaps = require('gulp-sourcemaps');
  var to5 = require('gulp-6to5');
  var concat = require('gulp-concat');

  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(to5())
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});
