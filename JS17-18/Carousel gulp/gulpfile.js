var gulp = require('gulp');
 // watch = require('gulp-watch');
var concatCss = require('gulp-concat-css');
var concat = require('gulp-concat');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var watch = require('gulp-watch');

gulp.task('concat-css', function () {
  return gulp.src('css/app/*.css')
    .pipe(concatCss("styles.main.css"))
    .pipe(gulp.dest('css/dest'));
});

gulp.task('concat-js', function() {
  return gulp.src('./js/app/*.js')
    .pipe(concat('script.main.js'))
    .pipe(gulp.dest('./js/dest'));
});

gulp.task('minify-js', function () {
    gulp.src('js/dest/script.main.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('js/dest'));
});

gulp.task('minify-css', function() {
  return gulp.src('css/dest/styles.main.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css/dest'));
});
