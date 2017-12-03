/*
build.js
===========
*/

var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('build', gulpSequence(['clean', 'scripts', 'styles'], ['copy'], ['images', 'replace:dist']));
