module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    // basePath: '',

    frameworks: ['jasmine', 'traceur'],

    files: [
      '../build/js/**/*.js',
      '../app/**/*.html',
      '../app/**/test/**/*.js'
    ],

    preprocessors: {
      '**/*.html': 'html2js',
      '../app/**/test/**/*.js': [ 'traceur' ]
    },
    //TODO - add coverage

    // browsify config
    browserify: {
      debug: true,
      transform: [ 'brfs' ]
    },


    // default configuration, not required
    traceurPreprocessor: {
      // options passed to the traceur-compiler
      // see traceur --longhelp for list of options
      options: {
        sourceMaps: false,
        modules: 'commonjs'
      },
      // custom filename transformation function
      //transformPath: function(path) {
        //return path.replace(/\.es6$/, '.js');
      //}
    },

    // list of files to exclude
    exclude: [],

    // test results reporter to use
    // possible values: dots || progress || nested || junit
    // use just 'spec' if you need to see the names of specs to be printed out, sometimes useful to find out
    // where warnigns are thrown.
    reporters: ['nested'],

    junitReporter: {
      outputFile: 'build/test-reports/test-results.xml'
    },

    // web server port
    port: 8080,

    // cli runner port
    runnerPort: 9100,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari
    // - PhantomJS
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
}
