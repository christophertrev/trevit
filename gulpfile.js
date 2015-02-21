var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
 
gulp.task('sass', function () {
  gulp.src('./client/styles/*.scss')
    .pipe(watch('./client/styles/*.scss'))
    .pipe(sass())
    .pipe(gulp.dest('./client/css'))
    .pipe(livereload());
});


 
gulp.task('watch', function () {
  livereload.listen();
  gulp.watch(['./client/styles/*.scss', './client/index.html'], ['sass'])
});