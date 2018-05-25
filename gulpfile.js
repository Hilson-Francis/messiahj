const gulp 			= require('gulp');
const sass 			= require('gulp-sass');
const nodemon 		= require('gulp-nodemon');
const minifyCSS 	= require('gulp-csso');
const concat 		= require('gulp-concat');
const sourcemaps 	= require('gulp-sourcemaps');
const uglify 		= require('gulp-uglify');
const livereload    = require('gulp-livereload');

gulp.task('server', function(){
	nodemon({
		script: 'app.js'
	})
})

gulp.task('sass', function(){
  return gulp.src('./public/assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError)) // Using gulp-sass
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public'))
    .pipe(livereload())
})

gulp.task('sass:watch', function(){
	livereload.listen();
	gulp.watch('./public/assets/sass/**/*.scss', ['sass'])
})

gulp.task('js:watch', function(){
	livereload.listen();
	gulp.watch('./public/assets/js/**/*.js', ['js'])
})

gulp.task('js', function(){
  return gulp.src('./public/assets/js/**/*.js')
  .pipe(sourcemaps.init())
  .pipe(concat('app.min.js'))
  .pipe(sourcemaps.write())
  .pipe(uglify())
  .pipe(gulp.dest('./public'))
  .pipe(livereload())
});

gulp.task('start', ['server', 'sass', 'js', 'sass:watch', 'js:watch'])