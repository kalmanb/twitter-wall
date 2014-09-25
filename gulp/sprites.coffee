gulp    = require 'gulp'
$       = require './utils/plugins'

gulp.task 'sprites', ->
  gulp.src './images/icons/*.svg'
    .pipe $.svgSprites({
      mode: 'symbols'
      preview: false
      svgId: 'icon-%f'
      svg:
        symbols: 'icons.svg'
    })
    .pipe gulp.dest('./images')
