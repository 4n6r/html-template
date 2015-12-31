var jade = require('gulp-jade');
var gulp = require('gulp');
var connect = require('gulp-connect');


gulp.task('jade', function() { 
  gulp.src('./app/views/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./public/'))
});

gulp.task('jade:watch', function () {
  gulp.watch('./app/views/**/*.jade', ['jade']);
});