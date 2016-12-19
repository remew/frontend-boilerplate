'use strict';

const gulp = require('gulp');
const del = require('del');
const webpack = require('webpack');
const compiler = webpack(require('./webpack.config'));
const browserSync = require('browser-sync').create();
const seq = require('run-sequence');

gulp.task('default', () => {
    console.log('gulp default task. Do nothing.');
});

gulp.task('clean', () => {
    return del(['dist/**/*']);
});

gulp.task('build', done => {
    seq('clean', 'build:script', 'copy', done);
});
gulp.task('build:script', done => {
    compiler.run(done);
});

gulp.task('copy', done => {
    seq('copy:html', 'copy:style', done);
});
gulp.task('copy:html', () => {
    return gulp.src(['src/**/*.html']).pipe(gulp.dest('dist'));
});
gulp.task('copy:style', () => {
    return gulp.src(['src/styles/**/*.css']).pipe(gulp.dest('dist/styles'));
});

gulp.task('watch', ['build'], () => {
    compiler.watch({}, (err) => {
        if (err) {
            return console.error(err);
        }
    });
    gulp.watch(['src/**/*.html'], ['copy:html']);
    gulp.watch(['src/**/*.css'], ['copy:css']);
});

gulp.task('serve', ['watch'], () => {
    browserSync.init({
        server: 'dist',
        open: true,
        files: [
            'dist/**/*'
        ]
    });
});


