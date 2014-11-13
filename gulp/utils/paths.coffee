module.exports =
  styles:
    all: './build/styles/**/*.scss'
    dest: './build/styles'
  scripts:
    all: './build/scripts/**/*.js'
    dest: './build/scripts'
  coffee:
    all: './scripts/**/*.coffee'
  typescript: 
    all: './scripts/**/*.ts'
  scss:
    bower: './bower_components/**/*.scss',
    all: './styles/**/*.scss'
    app: './styles/app.scss'
  templates:
    all: './templates/**/*.html'
  images:
    final: ['./images/*.svg']
  build: './build'
  test:
    unit:
      coffee: './test/unit/**/*.coffee'
      dest: './test/build/unit'
      all: './test/build/unit/**/*.js'
    e2e:
      coffee: './test/e2e/**/*.coffee'
      dest: './test/build/e2e'
      all: './test/build/e2e/**/*.js'
