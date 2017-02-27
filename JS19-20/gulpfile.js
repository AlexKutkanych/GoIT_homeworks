var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('style/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./style/'));
});

//Watch task
gulp.task('sass-w',function() {
    gulp.watch('style/*.scss',['sass']);
});
