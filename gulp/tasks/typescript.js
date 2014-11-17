var gulp = require('gulp');
var ts = require('gulp-typescript');
var concat = require('gulp-concat-sourcemap');
var sourcemaps = require('gulp-sourcemaps');
var rimraf = require('gulp-rimraf');

var config = require('../config');

var tsProject = ts.createProject({
  declarationFiles: true,
  noExternalResolve: true
});

gulp.task('typescript', function() {
  var tsResult = gulp.src(config.typescript.src)
  .pipe(sourcemaps.init()) // This means sourcemaps will be generated
  .pipe(ts(tsProject));

  return tsResult.js
  .pipe(concat('app.js')) // You can use other plugins that also support gulp-sourcemaps
  .pipe(sourcemaps.write()) // Now the sourcemaps are added to the .js file
  .pipe(gulp.dest('build/js'));
});

//gulp.task('testCompile:typescript', function() {
  //var tsResult = gulp.src(["app/**/test/**/*.ts", "app/**/e2e/**/*.ts"])
  //.pipe(sourcemaps.init()) // This means sourcemaps will be generated
  //.pipe(ts(tsProject));

  //return tsResult.js
  //.pipe(concat('app.js')) // You can use other plugins that also support gulp-sourcemaps
  //.pipe(sourcemaps.write()) // Now the sourcemaps are added to the .js file
  //.pipe(gulp.dest('build/js'));
//});

gulp.task('clean:js', function() {
  gulp.src('./build/js', { read: false }) // much faster
  .pipe(rimraf({force: true}));
})
