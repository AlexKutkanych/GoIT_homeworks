var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var jsmin = require('gulp-jsmin');
var imagemin = require('gulp-imagemin');
var spritesmith = require('gulp.spritesmith');

gulp.task('sass', function() {
    gulp.src('style/src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./style/dest/'));
});

gulp.task('concat-css', function () {
  return gulp.src(['style/dest/fonts.css', 'style/dest/js-carousel.css', 'style/dest/style.css'])
    .pipe(concatCss("styles.main.css"))
    .pipe(gulp.dest('style'));
});

gulp.task('minify-css', function () {
    gulp.src('style/styles.main.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('style'));
});

gulp.task('concat-js', function() {
  return gulp.src('js/src/*.js')
    .pipe(concat('script.main.js'))
    .pipe(gulp.dest('js'));
});

gulp.task('minify-js', function () {
    gulp.src('js/script.main.js')
        // .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('js'));
});

gulp.task('imagemin', () =>
    gulp.src('img/src/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img/dist'))
);

gulp.task('sprite', function () {
  var spriteData = gulp.src('img/dist/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest('img'));
});

//Watch task
gulp.task('sass-w',function() {
    gulp.watch(['style/src/*.scss', 'style/*.css', 'style/dest/*.css', 'img/dest/*.png', 'img/src/*.png', 'img/dest/*.jpg', 'img/src/*.jpg'], ['concat-css', 'minify-css', 'sass', 'concat-js', 'minify-js', 'imagemin', 'sprite']);
});

// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var concatCss = require('gulp-concat-css');
//
// gulp.task('sass', function() {
//     gulp.src('style/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('./style/'));
// });
//
// gulp.task('concat-css', function () {
//   return gulp.src(['style/style.css','style/style1.css'])
//     .pipe(concatCss("styles.main.css"))
//     .pipe(gulp.dest('style'));
// });
//
// //Watch task
// gulp.task('sass-w',function() {
//     gulp.watch(['style/*.scss', 'style/*.css'], ['concat-css', 'sass']);
// });
