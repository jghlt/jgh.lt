/*
images.js
===========
*/

var gulp = require('gulp');
var config = require('../config');
var imagemin = require('gulp-imagemin');
var handleErrors = require('../utilities/errors');

gulp.task('images', function () {
  return gulp.src([
        config.distPath + '/**/images/*',
        config.distPath + '/**/icons/*'
    ]).pipe(imagemin({
        progressive: true
    }).on('error', handleErrors)).pipe(gulp.dest(config.distPath));
});
