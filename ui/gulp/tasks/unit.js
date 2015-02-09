var gulp    = require('gulp');

gulp.task('clean:unit', function() {
  var karma   = require('karma');
  var rimraf = require('gulp-rimraf');

  gulp.src("./app/**/test/**/*.js", {read: false})
  .pipe(rimraf());
});

gulp.task('unit', function () {
  var karma   = require('karma');

  return karma.server.start({
    configFile: __dirname + '/../../config/karma.conf.js',
    singleRun: true
  });
});

gulp.task('unit:watch', function() {
  var karma   = require('karma');
  
  return karma.server.start({
    configFile: __dirname + '/../../config/karma.conf.js',
  });
});


