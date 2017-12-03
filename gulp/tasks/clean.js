/*
clean.js
===========
*/

var gulp = require('gulp');
var del = require('del');
var config = require('../config');

gulp.task('clean', function() {
    return del.sync([config.distPath+'/*']);
});
