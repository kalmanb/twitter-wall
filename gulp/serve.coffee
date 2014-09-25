gulp        = require 'gulp'
$           = require './utils/plugins'
fs          = require 'fs'
browserSync = require 'browser-sync'

prefix = '/api/v1'
prefixRegExp = new RegExp(prefix + '(.*)')

jitterResponse = (res, content)->
  setTimeout ->
    res.end(content, 'utf-8')
  , $.utils.randomInt(0.8 * $.config.latency, 1.2 * $.config.latency)

# "a=1&b=2&b=3" => {a: 1, b: [2, 3]}
parseParams = (query)->
  params = {}
  if query?
    for paramStr in query.split('&')
      keyValue = paramStr.split('=')

      if not params[keyValue[0]]
        params[keyValue[0]] = []

      value = decodeURIComponent(keyValue[1])

      try
        value = JSON.parse(value)

      params[keyValue[0]].push(value)

  for key, value of params
    if value.length == 1
      params[key] = value[0]

  params

middleware = if $.config.mocked
  (req, res, next)->
    path = req._parsedUrl.pathname

    if prefixRegExp.test(path)
      pathRelative = '.' + path
      pathCoffee = pathRelative + '.coffee'

      fs.stat pathCoffee, (error, stats)->
        if error?
          pathJson = pathRelative + '.json'
          fs.readFile pathJson, (error, content)->
            if error?
              console.log 'GET', path, '--> 404'
              console.log error
              res.writeHead(404)
              res.end()
            else
              console.log 'GET', path, '--> 200'
              res.writeHead 200, {'Content-Type': 'application/json'}
              jitterResponse res, content
        else
          params = parseParams req._parsedUrl.query
          console.log 'GET', path, '--> 200'
          res.writeHead 200, {'Content-Type': 'application/json'}
          jitterResponse res, JSON.stringify require('.' + pathCoffee)(path, params)
    else
      next()
else
  (req, res, next)->
    next()


gulp.task 'serve', ->
  config = {
    server: {
      baseDir: './'
      middleware: middleware
    },
    port: 8000
    open: false
    notify: false
  }

  if not $.config.sync
    config.ghostMode = false

  browserSync config
