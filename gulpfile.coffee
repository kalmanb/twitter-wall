gulp  = require 'gulp'
fs    = require 'fs'
path  = require 'path'

tasks = fs.readdirSync('./gulp/').filter (name)->
  (/(\.coffee$)/i).test(path.extname(name))

tasks.forEach (task)->
  require('./gulp/' + task)

gulp.task 'build', ['sprites', 'scss', 'coffee']

gulp.task 'default', ['sprites', 'watch', 'serve']
