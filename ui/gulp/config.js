var build = './build/';

var web = {
  base: './web/'
}

web.assets = web.base + 'assets/'

web.dest = {
  dir: build + 'web/',
  assets: build + 'web/assets/'
};

web.scss = {
  src: web.base + 'assets/scss/**/*.scss',
  dest: web.dest.dir + 'css/'
};

web.scripts = {
  dir: web.base + 'app/',
  dest: web.dest.dir + 'js/'
};

web.images = {
  src: web.assets + 'img/**',
  dest: web.dest.dir + 'img/'
};

web.html = {
  src: web.base + 'app/**/*.html',
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

var server = {
  base : './server',
};

server.scripts = {
  src: server.base + '/**/*.js',
  root: server.base + '/server.js'
};

server.scripts.dest = {
  dir: build + 'server/',
  js: build + 'server/**/*.js',
  root: build + 'server/server.js'
};

module.exports = {
  web: web,
  browserSync: browserSync,
  server: server
}
