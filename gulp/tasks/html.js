var gulp = require('gulp');


gulp.task('html', function() {
  var config = require('../config').html;

  gulp.src(config.src).pipe(gulp.dest(config.dest));
});

gulp.task('clean:html', function() {
  var rimraf = require('gulp-rimraf');

  gulp.src('./build/**/*.html', { read: false }) // much faster
  .pipe(rimraf({force: true}));
})
