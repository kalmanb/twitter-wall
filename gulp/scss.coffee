gulp    = require 'gulp'
$       = require './utils/plugins'
onError = require './utils/onError'

gulp.task 'clean:styles', ->
  gulp.src($.paths.styles.all, {read: false})
    .pipe($.rimraf())

config =
  style: 'expanded'
  precision: 10
  sourcemap: true
  sourcemapPath: './'
  loadPath: [
    $.paths.scss.bower
    $.paths.scss.all
  ]

gulp.task 'scss', ['clean:styles'], ()->
  gulp.src($.paths.scss.app)
    .pipe($.plumber({errorHandler: onError}))
    .pipe($.rubySass(config))
    .pipe($.filter('**/*.css'))
    .pipe($.autoprefixer('last 1 version'))
    .pipe(gulp.dest($.paths.styles.dest))
    .pipe($.size({title: 'styles'}))
    .pipe($.if($.config.live, $.reloadStream()))

gulp.task 'watch:scss', ['scss'], ->
  $.watch($.paths.scss.all, {name: 'Scss'}, (files, cb)->
    gulp.start 'scss', cb
  )
