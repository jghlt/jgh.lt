/*
default.js
===========
*/

var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('default', gulpSequence(['clean', 'scripts', 'styles'], ['replace', 'watch']));
