'use strict()';

var fs = require('fs');
var gulp = require('gulp');

fs.readdirSync(__dirname + '/util/gulp').forEach(function (task) {
  require('./util/gulp/' + task);
});

gulp.task('build', ['jade', 'sass']);
gulp.task('serve', ['jade','sass','jade:watch','sass:watch','server'])