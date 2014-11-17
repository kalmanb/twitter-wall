var gulp  = require('gulp');
var config= require('../config');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
    gulp.watch(config.html.src, ['html']);
    gulp.watch(config.scss.src,   ['scss']);
    gulp.watch(config.typescript.src, ['scripts']);
});
