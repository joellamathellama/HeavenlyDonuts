'use strict';

// Packages
const gulp       = require('gulp');
const server     = require('gulp-express');
const sass       = require('gulp-sass');
const browserify = require('browserify');
const source     = require('vinyl-source-stream');
const concat     = require('gulp-concat');
const babelify   = require('babelify');
//const lint       = require('gulp-eslint')
// Shortcuts
const config = {
  paths: {
    html: './client/*.html',
    js: [
      './client/**/*.jsx',
      './client/**/*.js'
    ],
    myscss: './client/**/*.scss',
    scss: [
      './client/scss/style.scss'
    ],
    dist: './dist',
    appJs: './client/app.jsx'
  }
}
// Server
gulp.task('server', function() {
  server.run(['server/index.js']);
  // watch tasks to reset the server
  //gulp.watch([config.paths.html], server.notify);
  //gulp.watch([config.paths.myscss], server.notify);
  //gulp.watch([config.paths.js], server.notify);
})
// Copy & pastes index.html into the dist folder
gulp.task('html', function(){
  gulp.src(config.paths.html)
    .on('error', console.error.bind(console))
    .pipe(gulp.dest(config.paths.dist))
})
// Transform & bundle into the dist folder
gulp.task('js', function(){
  browserify(config.paths.appJs)
    .transform(babelify, {presets: ["es2015", "react", "stage-0"]})
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
})
// Convert and compile scss > css
gulp.task('scss', function () {
  return gulp.src(config.paths.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.paths.dist + '/css'))
});
// Rebundle on .js & .html changes
gulp.task('watch', function() {
   gulp.watch(config.paths.html, ['html'])
   gulp.watch(config.paths.js, ['js'])
   gulp.watch(config.paths.myscss, ['scss'])
})
// 'default' bundles html, js, and css
// 'dev' bundles & runs the 'watch' task
gulp.task('default', ['html', 'js', 'scss'])
gulp.task('dev', ['html', 'js', 'scss', 'watch', 'server'])
