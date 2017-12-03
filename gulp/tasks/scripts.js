/*
scripts.js
===========
*/

var gulp = require('gulp');
var config = require('../config');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browserify = require('browserify');
var babelify = require('babelify');
var modernizr = require('gulp-modernizr');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var merge = require('merge-stream');
var handleErrors = require('../utilities/errors');

gulp.task('scripts', function() {

    // merge modernizr & browserify
    // return the streams from the merged task
    // concat the results into single /js/bundle.js
    return merge(
        gulp.src([
          config.srcPath+'/js/**/*.js',
          config.srcPath+'/scss/**/*.scss'
        ]).pipe(modernizr({
            options : [
                'mq',
                'html5shiv',
                'html5printshiv',
                'setClasses'
            ],
            tests: [
                'csspointerevents',
                'touchevents',
                'flexbox',
                'rgba'
            ]
        })
        .on('error', handleErrors))
        .pipe(uglify()),

        browserify({
            debug: true,
            entries: config.srcPath+'/js/main.js'
        })
        .transform(babelify, {
            presets: ['es2015']
        })
        .bundle()
        .on('error', handleErrors)
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(uglify())

    ).pipe(concat('bundle.js')).pipe(gulp.dest(config.srcPath+'/js'));

});
