var gulp       = require('gulp');
var protractor = require("gulp-protractor").protractor;
var child_process = require('child_process');
var path = require('path');

gulp.task('e2e', function () {
  gulp.src(["./app/**/e2e/**/*.js"])
  .pipe(protractor({
    configFile: "config/protractor.config.js",
    args: ['--baseUrl', 'http://127.0.0.1:8000']
  })) 
  .on('error', function(e) { throw e })
});


// optimization: cache for protractor binaries directory
var protractorDir = null;

// Download and update the selenium driver
function getProtractorDir() {
  if (protractorDir) {
    return protractorDir;
  }
  var result = require.resolve("protractor");
  if (result) {
    // result is now something like 
    //    // c:\\Source\\gulp-protractor\\node_modules\\protractor\\lib\\protractor.js
    protractorDir = path.resolve(path.join(path.dirname(result), "..", "..", ".bin"));
    return protractorDir;
  }
  throw new Error("No protractor installation found."); 
}

var webdriver_update = function(opts, cb) {
  var callback = (cb ? cb : opts);
  var options = (cb ? opts : null);
  var args = ["update", "--standalone"];
  if (options) {
    if (options.browsers) {
      options.browsers.forEach(function(element, index, array) {
        args.push("--" + element);
      });
    }
  } 
  child_process.spawn(path.resolve(getProtractorDir() + '/webdriver-manager'), args, {
    stdio: 'inherit'
  }).once('close', callback);
};

gulp.task('e2e:update', webdriver_update);

