var gulp = require('gulp');
var ts = require('gulp-typescript');
//var eventStream = require('event-stream');
var concat = require('gulp-concat-sourcemap');
var sourcemaps = require('gulp-sourcemaps');

var tsProject = ts.createProject({
  declarationFiles: true,
  noExternalResolve: true
});

//gulp.task('scripts', function() {
  //var tsResult = gulp.src('app/**/*.ts')
  //.pipe(ts(tsProject));

  //// Merge the two output streams, so this task is finished when the IO of both operations are done.
  //return eventStream.merge( 
                           //tsResult.dts.pipe(gulp.dest('build/definitions')),
                           //tsResult.js.pipe(gulp.dest('build/js'))
                          //);
//});

  gulp.task('scripts', function() {
    //var tsResult = gulp.src('lib/*.ts')
    var tsResult = gulp.src('app/**/*.ts')
    .pipe(sourcemaps.init()) // This means sourcemaps will be generated
    .pipe(ts(tsProject));
           
    return tsResult.js
    .pipe(concat('app.js')) // You can use other plugins that also support gulp-sourcemaps
    .pipe(sourcemaps.write()) // Now the sourcemaps are added to the .js file
    .pipe(gulp.dest('build/js'));
  });

  //gulp.task('watch', ['scripts'], function() {
  //gulp.watch('./app/**/*.ts', ['scripts']);
  //});

