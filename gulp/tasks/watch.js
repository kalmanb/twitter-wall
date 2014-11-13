var gulp  = require('gulp');
var config= require('../config');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
    gulp.watch(config.scss.src,   ['scss']);
    //gulp.watch(config.images.src, ['images']);
    //gulp.watch(config.markup.src, ['markup']);
    gulp.watch(config.scripts.src, ['scripts']);
    gulp.watch('./app/**/*.ts', ['scripts']);
});
