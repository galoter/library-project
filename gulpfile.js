var gulp = require('gulp');
var connect = require('gulp-connect');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');

gulp.task("default",['less','start-server','watch'],function(){
	console.log('ok start');


});

gulp.task('start-server',function(){
	connect.server({
	    root: './',
	    livereload: true,
	    port:3000
 	});
});

gulp.task('html', function () {
	gulp.src('*.html').pipe(connect.reload());
});
 
gulp.task('watch', function () {
 	gulp.watch(['*.html','js/**/*.js','css/**/*.css'], ['html']);
 	gulp.watch(['css/style.less'], ['less']);
});

gulp.task('less', function () {
 return gulp.src('css/style.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('css'));
});