var gulp = require('gulp');
var protractorQA = require('gulp-protractor-qa');

var config = require('../config');

gulp.task('protractor-qa', function() {
  protractorQA.init({
    testSrc : './app/**/e2e/**/*.js',
    viewSrc : config.html.src
  });
}); 
