var gulp = require('gulp');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var babel = require('gulp-babel');


/* FILE PATHS */
var DIST_PATH = 'public/dist';
var SCRIPTS_PATH = 'public/scripts/**/*.js';
var CSS_PATH = 'public/css/**/*.css';
var SCSS_PATH = 'public/scss/**/*.scss';

// Styles SASS
gulp.task('styles', function(){
  return gulp.src(['public/scss/style.scss'])
    .pipe(plumber(function(err) {
      console.log('Styles task error!');
      console.log(err);
      this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(autoprefixer({
      browsers: ['last 10 versions'],
      cascade: true
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());
});

// Scripts
gulp.task('scripts', function(){
  return gulp.src(SCRIPTS_PATH)
    .pipe(plumber(function(err){
      console.log('Scripts task error!');
      console.log(err);
      this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    // .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());
});

// Images
gulp.task('images', function(){
  console.log('starting images task');
});

// Watch
gulp.task('watch', function(){
  require('./server.js');
  livereload.listen();
  gulp.watch(SCRIPTS_PATH, ['scripts']);
  // gulp.watch(CSS_PATH, ['styles']);
  gulp.watch(SCSS_PATH, ['styles']);
});

// Default
gulp.task('default', function () {
  console.log('Starting default task!');

})





/* REPOSITORY */

// Styles regular CSS
/* gulp.task('styles', function(){
  return gulp.src(['public/css/reset.css', CSS_PATH])
    .pipe(plumber(function(err) {
      console.log('Styles task error!');
      console.log(err);
      this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: ['last 10 versions'],
      cascade: true
    }))
    .pipe(concat('style.css'))
    .pipe(minifycss())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());
}); */
