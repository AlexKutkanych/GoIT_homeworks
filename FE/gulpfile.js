var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
const imagemin = require('gulp-imagemin');

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

gulp.task('imagemin', () =>
    gulp.src('img/src/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img/dist'))
);

//Watch task
gulp.task('sass-w',function() {
    gulp.watch(['style/src/*.scss', 'style/*.css', 'style/dest/*.css', 'img/dest/*.png', 'img/src/*.png', 'img/dest/*.jpg', 'img/src/*.jpg'], ['concat-css', 'sass', 'imagemin']);
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
