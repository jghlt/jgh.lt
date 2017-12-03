/*
replace.js
===========
*/

var gulp = require('gulp');
var config = require('../config');
var git = require('git-rev-sync');
var gitRevision = git.short();
var replace = require('gulp-replace');
var handleErrors = require('../utilities/errors');

gulp.task('replace', function(){
    return gulp.src([config.layoutsPath + '/*.html'])
    .pipe(replace(/(\/dist\/([\w]){7,}\/)/g, '/src/'))
    .pipe(gulp.dest(config.layoutsPath));
});

gulp.task('replace:dist', function(){
    return gulp.src([config.layoutsPath + '/*.html'])
    .pipe(replace(/(\/src\/)/g, '/dist/' + gitRevision + '/'))
    .pipe(gulp.dest(config.layoutsPath));
});
