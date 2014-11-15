var gulp = require('gulp');
var rimraf = require('gulp-rimraf');

var config = require('../config').html;

gulp.task('html', function() {
  gulp.src(config.src).pipe(gulp.dest(config.dest));
});

gulp.task('clean:html', function() {
  gulp.src('./build/**/*.html', { read: false }) // much faster
  .pipe(rimraf({force: true}));
})
