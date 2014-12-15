var gulp = require('gulp');


gulp.task('scripts', function() {
  var browserify = require('gulp-browserify');
  var traceur = require('gulp-traceur');
  var config = require('../config');

  gulp.src('./app/app.js', { read: false })
  .pipe(browserify({
    insertGlobals : true,
    debug : true
  }))
  .pipe(traceur())
  .pipe(gulp.dest(config.scripts.dest));
});


// TOOD
// // JSHint task
// gulp.task('lint', function() {
//   gulp.src('./app/scripts/*.js')
//     .pipe(jshint())
//       // You can look into pretty reporters as well, but that's another story
//         .pipe(jshint.reporter('default'));
//         });
