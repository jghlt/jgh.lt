/*
styles.js
===========
*/

var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../config');
var cssnano = require('cssnano');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var handleErrors = require('../utilities/errors');

gulp.task('styles', function () {

    var processors = [
        autoprefixer({
            browsers: ['last 2 versions', 'last 3 iOS versions', '> 5%']
        }),
        cssnano({
            zindex : false
        }),
    ];

    return gulp.src(config.srcPath + '/scss/**/*.scss')
    .pipe(sass({
        'includePaths':['./node_modules'],
        'outputStyle': 'expanded'
    })
    .on('error', handleErrors))
    .pipe(postcss(processors))
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest(config.srcPath+'/css/'));

});
