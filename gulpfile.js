var gulp = require('gulp'),
	sass = require('gulp-sass'),
	pug = require('gulp-pug'),
	browserSync = require('browser-sync').create();
 
gulp.task('default', [ 'sass','views', 'serve']);


gulp.task('sass', function () {
  return gulp.src('./src/style.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(''))
    .pipe(browserSync.stream());
});
 
gulp.task('views', function buildHTML() {
  return gulp.src('./src/index.pug')
  .pipe(pug({pretty: true}))
  .pipe(gulp.dest(''))
  .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: ""
    });

    gulp.watch('./src/style.sass', ['sass']).on('change', browserSync.reload);
    gulp.watch('./src/index.pug', ['views']).on('change', browserSync.reload);
  	gulp.watch('./src/main.js' ).on('change', browserSync.reload);
    
});

