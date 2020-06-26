// Gulp Require File
const {
  src,
  dest,
  series,
  watch
} = require("gulp");
const gulpSass = require("gulp-sass");
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const minifyScss = require("gulp-minify-css");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();
const imagemin = require("gulp-imagemin");

// Gulp Path File
var SCSS_FILE = "./src/sass/**/*.scss";
var CSS_FILE = "./src/css/**/*.css";
var JS_FILE = "./src/js/**/*.js";
var IMG_FILE = "./src/images/**/*";

// Sass Function
function sass() {
  return src([SCSS_FILE])
    .pipe(gulpSass())
    .pipe(postcss([autoprefixer()]))
    .pipe(minifyScss())
    .pipe(dest("./assets/css"));
}

// Minify css Function
function minifycss() {
  return src([CSS_FILE])
    .pipe(minifyScss({ keepBreaks: false }))
    .pipe(dest("./assets/css"));
}

// JS Function
function javascript() {
  return (
    src([JS_FILE])
      .pipe(uglify())
      // .pipe(concat("based.js"))
      .pipe(dest("./assets/js"))
  );
}

// Image Function
function image() {
  return src([IMG_FILE])
    .pipe(imagemin())
    .pipe(dest("./assets/images"));
}


// Browser Sync Function
function browser() {
  browserSync.init(["./**/*.*"], {
    server: {
      baseDir: "./"
    }
  });
  watchTasks();
}

function watchTasks() {
  watch(IMG_FILE, series(image));
  watch(CSS_FILE, series(minifycss));
  watch(SCSS_FILE, series(sass));
  watch(JS_FILE, series(javascript));
}

exports.sass = sass;
exports.image = image;
exports.minifycss = minifycss;
exports.javascript = javascript;
exports.start = series(browser);

// Export All Function
exports.default = series(sass, image, minifycss, javascript);