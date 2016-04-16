"use strict";
// Packages
var gulp       = require('gulp');
var connect    = require('gulp-connect'); // Runs a local dev server
var open       = require('gulp-open'); // Open a URL in a webbrowser
var browserify = require('browserify'); // Bundles JS
var source     = require('vinyl-source-stream'); // Use conventional text stream with Gulp
var concat     = require('gulp-concat'); // concatenates files
var babelify   = require('babelify');

var config = {
  port: 8000,
  devBaseUrl: 'http://localhost',
  prodBase: process.env.PORT || 8000,
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
    ],
    dist: './dist',
    appJs: './src/app.js'
  }
}

//========== LOCAL ===========

// Local
gulp.task('connect', function() {
  connect.server({
    root: ['dist'],
    port: config.port,
    livereload: true
  })
});

// Open
gulp.task('open', ['connect'], function() {
  gulp.src('dist/index.html')
      .pipe(open({ uri: config.prodBase || config.devBaseUrl + ':' + config.port + '/' }))
});

// Bundle html
gulp.task('html', function(){
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
})

// Bundle .js files
gulp.task('js', function(){
  browserify(config.paths.appJs)
    .transform(babelify, {presets: ["es2015", "react", "stage-0"]})
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(connect.reload())
})

// Bundle .css files
gulp.task('css', function(){
  gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist + '/css'))
    .pipe(connect.reload())
})

// watch html and js files for changes
gulp.task('watch', function() {
   gulp.watch(config.paths.html, ['html']);
   gulp.watch(config.paths.js, ['js']);
});

//========== PRODUCTION ===========

gulp.task('htmlprod', function(){
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
})

gulp.task('jsprod', function(){
  browserify(config.paths.appJs)
    .transform(babelify, {presets: ["es2015", "react", "stage-0"]})
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
})

gulp.task('cssprod', function(){
  gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist + '/css'))
})

gulp.task('default', ['htmlprod', 'jsprod', 'cssprod']);
gulp.task('dev', ['html', 'js', 'open', 'watch', 'css']);