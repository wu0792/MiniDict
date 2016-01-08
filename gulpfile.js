var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var browser = require('browser-sync');
var nodemon = require('gulp-nodemon');

gulp.task('watch', function () {
    gulp.watch('styles/*.less', ['less']);
});

gulp.task('less', function () {
    return gulp.src('./styles/*.less')
        .pipe(less())
        .pipe(gulp.dest('./public/styles/'));
});

gulp.task('browser-sync',
    ['watch'],
    function () {
        proxy: 'http://localhost:6666';
        files: ['public/**/*.*', "views/*.*"];
        browser: 'google chrome';
        port: 7000;
    });

//gulp.task('default', ['browser-sync']);