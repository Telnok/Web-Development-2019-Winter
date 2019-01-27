// Gulp 4

const { src, dest, parallel, series } = require('gulp');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const inject = require('gulp-inject');

let htmlPaths = [
  'app/index.html', 
  'app/registration.html', 
  'app/products.html'
];

let vendorPackages = [
  'node_modules/jquery/dist/jquery.min.js',
];

function html() {
  return src(htmlPaths)
      .pipe(inject(src(['./build/js/vendor.min.js', './build/js/*.js', './build/**/*.css'], { read: false }),
        {ignorePath: 'build', addRootSlash: false }))
      .pipe(dest('build'));
}

function js() {
  return src('app/js/*.js', { sourcemaps: true })
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(dest('build/js'));
}

function vendorJs() {
  return src(vendorPackages)
    .pipe(concat('vendor.min.js'))
    .pipe(dest('build/js'))
}

function css() {
  return src('app/css/*.css')
    .pipe(concat('app.min.css'))
    .pipe(minifyCSS())
    .pipe(dest('build/css'))
}

function images() {
  return src('app/images/*.jpg')
    .pipe(dest('build/images'))
}

exports.js = js;
exports.css = css;
exports.default = series(vendorJs, js, css, images, html);