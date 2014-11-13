var gulp = require('gulp');
var config = require('../config').markup
var eventStream = require('event-stream');

gulp.task('markup', function() {

  // Merge the two output streams, so this task is finished when the IO of both operations are done.
  return eventStream.merge( 
                           gulp.src(config.src) .pipe(gulp.dest(config.dest)),
                           gulp.src('./app/**/*.html').pipe(gulp.dest(config.dest))
                          );
});

