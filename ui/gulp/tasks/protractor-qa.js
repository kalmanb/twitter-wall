var gulp = require('gulp');

gulp.task('protractor-qa', function() {
  var protractorQA = require('gulp-protractor-qa');
  var config = require('../config');

  protractorQA.init({
    testSrc : './app/**/e2e/**/*.js',
    viewSrc : config.web.html.src
  });
}); 
