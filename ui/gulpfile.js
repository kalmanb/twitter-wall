// Uncomment to see require load times
//require("time-require");

var gulp  = require('gulp');
var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });

gulp.task('default', ['watch']);
gulp.task('build', ['scripts', 'scss', 'images', 'html']);
gulp.task('test', ['unit', 'e2e']);
gulp.task('clean', ['clean:html', 'clean:js', 'clean:scss']);

