var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var debug = require('gulp-debug');
var watchLess = require('gulp-watch-less');
var livereload = require('gulp-livereload');
var concatCss = require('gulp-concat-css');
var inject = require('gulp-inject');
var browserSync = require('browser-sync').create();

gulp.task('serve',function () {
        browserSync.init({
            server: {
                baseDir: "./",
            },
            startPath: 'webapp/index.html'
        });
})

gulp.task('reload', function () {
    return gulp.src('webapp/index.html')
        .pipe(livereload());
});

gulp.task('html-reload', function() {
    gulp.watch("webapp/**/*.{html,js}",['reload']);
});

gulp.task('less', function () {
    watchLess('webapp/**/*.less')
        .pipe(debug())
        .pipe(less())
        .pipe(gulp.dest('webapp/less'));
});

gulp.task('watch', function () {
    gulp.watch('webapp/less/**/*.css', ['concatcss']);
    livereload.listen();

});

gulp.task('concatcss', function () {
    return gulp.src('webapp/less/**/*.css')
        .pipe(concatCss("master.css"))
        .pipe(gulp.dest('webapp/'))
        .pipe(livereload());
});

gulp.task('index', function () {
    var target = gulp.src('webapp/index.html');
    var sources = gulp.src('webapp/front/**/*.js', {read: false});
    return target.pipe(inject(sources,{ignorePath: 'webapp/',addRootSlash: false}))
        .pipe(gulp.dest('webapp/'));
});

gulp.task('default', ['watch', 'less','index','html-reload','serve']);
