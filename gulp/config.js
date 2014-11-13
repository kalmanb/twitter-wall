var dest = "./build";

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, "./assets"]
    },
    files: [
      dest + "/**",
      // Exclude Map files
      "!" + dest + "/**.map"
    ]
  },
  scss: {
    src: './assets/scss/**/*.scss',
    dest: dest + "/css"
  },
  scripts: {
    src:  "./app/**/*.ts",
    dest: dest
  },
  images: {
    src: "./assets/img/**",
    dest: dest + "/img"
  },
  markup: {
    src: 'index.html',
    dest: dest
  }
}
