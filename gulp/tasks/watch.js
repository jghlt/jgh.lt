/*
watch.js
===========
*/

var gulp = require('gulp');
var config = require('../config');
var timeout = 500;

gulp.task('watch', function(){
    gulp.watch(config.appPath+'/views/**/*.html', { interval: timeout }, ['styles', 'scripts']);
    gulp.watch([
        config.srcPath+'/js/**/*.js',
        '!'+config.srcPath+'/js/bundle.js',
    ], { interval: timeout }, ['scripts']);
    gulp.watch(config.srcPath+'/scss/**/*.scss', { interval: timeout }, ['styles']);
});
