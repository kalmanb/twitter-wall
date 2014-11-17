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
  typescript: {
    src:  "./app/**/*.ts",
    dest: dest
  },
  testTypescript: {
    src:  ["./app/**/test/**/*.ts", "./app/**/e2e/**/*.ts"],
    dest: dest + "/test"
  },
  images: {
    src: "./assets/img/**",
    dest: dest + "/img"
  },
  html: {
    src: "./app/**/*.html",
    dest: dest
  }
}
