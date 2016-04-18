// Packages
const gulp       = require('gulp')
const browserify = require('browserify')
const source     = require('vinyl-source-stream')
const concat     = require('gulp-concat')
const babelify   = require('babelify')
const lint       = require('gulp-eslint')
// Shortcuts
const config = {
  paths: {
    html: './client/*.html',
    js: './client/**/*.js',
    mycss: './client/*.css',
    css: [
      './node_modules/bootstrap/dist/css/bootstrap.min.css',
      './node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
      './client/style.css'
    ],
    dist: './dist',
    appJs: './client/app.js'
  }
}
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
// Concat into the dist folder
gulp.task('css', function(){
  gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .on('error', console.error.bind(console))
    .pipe(gulp.dest(config.paths.dist + '/css'))
})
// Linter(NOT IN USE)
gulp.task('lint', function() {
  return gulp.src(config.paths.js)
    .pipe(lint({config: 'eslint.config.json'}))
    .pipe(lint.format())
})
// Rebundle on .js & .html changes
gulp.task('watch', function() {
   gulp.watch(config.paths.html, ['html'])
   gulp.watch(config.paths.js, ['js'])
   gulp.watch(config.paths.mycss, ['css'])
})
// 'default' bundles html, js, and css
// 'dev' bundles & runs the 'watch' task
gulp.task('default', ['html', 'js', 'css'])
gulp.task('dev', ['html', 'js', 'css', 'watch'])
