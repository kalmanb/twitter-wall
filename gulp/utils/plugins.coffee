plugins     = require('gulp-load-plugins')()
browserSync = require 'browser-sync'
argv        = require('yargs').argv
lazypipe    = require 'lazypipe'
paths       = require './paths'
utils       = require './utils'

module.exports = plugins

module.exports.reload = browserSync.reload

module.exports.reloadStream = ->
  browserSync.reload({stream: true})

module.exports.paths = paths

module.exports.utils = utils

module.exports.lazypipe = lazypipe

module.exports.filters =
  log: (file)->
    console.log file.event, file.path
    true
  changed: (file)->
    file.event == 'changed'

module.exports.config =
  mocked: argv.mocked || argv.m
  latency: argv.latency || 100
  live: argv.live == undefined || argv.live != 'false'
  sync: argv.sync == undefined || argv.sync != 'false'
