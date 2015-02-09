var build = './build/';

var web = {};

web.assets = 'assets/'

web.dest = {
  dir: build + 'web/',
  assets: build + 'web/assets/'
};

web.scss = {
  src: 'assets/scss/**/*.scss',
  dest: web.dest.dir + 'css/'
};

web.scripts = {
  dir: 'app/',
  dest: web.dest.dir + 'js/'
};

web.images = {
  src: web.assets + 'img/**',
  dest: web.dest.dir + 'img/'
};

web.html = {
  src: 'app/**/*.html',
  dest: web.dest.dir
};

var browserSync = {
  server: {
    // We're serving the src folder as well
    // for sass sourcemap linking
    baseDir: [web.dest.dir, web.assets]
  },
  files: [
    web.dest.dir + '/**',
    // Exclude Map files
    '!' + web.dest.dir + '/**.map'
  ]
};

module.exports = {
  web: web,
  browserSync: browserSync,
}
