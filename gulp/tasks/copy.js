/*
copy.js
===========
*/

var gulp = require('gulp');
var git = require('git-rev-sync');
var config = require('../config');
var gitRevision = git.short();

gulp.task('copy', function() {
    return gulp.src([
        config.srcPath + '/icons/**',
        config.srcPath + '/fonts/**',
        config.srcPath + '/images/**',
        config.srcPath + '/js/bundle.js',
        config.srcPath + '/css/bundle.css'
    ], {
        base: config.srcPath
    }).pipe(gulp.dest(config.distPath + '/' + gitRevision + '/' ));
});
