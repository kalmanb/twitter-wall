var gulp    = require('gulp');
var karma   = require('karma');
var rimraf = require('gulp-rimraf');

var config = require('../config');

gulp.task('clean:unit', function() {
  gulp.src("./app/**/test/**/*.js", {read: false})
  .pipe(rimraf());
});

gulp.task('unit', function () {
  return karma.server.start({
    configFile: __dirname + '/../../config/karma.conf.js',
    singleRun: true
  });
});

gulp.task('unit:watch', function() {
  return karma.server.start({
    configFile: __dirname + '/../../config/karma.conf.js',
  });
});


