'use strict()';

var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('server', function() {
  connect.server({
  	port: 8000,
  	host: 'local.dev',
  	root: 'public',
    livereload: true
  });
});