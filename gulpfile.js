var gulp = require('gulp');

//requiring the gulp-sass plugin
var sass = require('gulp-sass');

//requiring browser sync
var browserSync = require('browser-sync').create();


//for uglify to min js
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');

//minify css
var cssnano = require('gulp-cssnano');

// making gulp watching for changes/saves---defining browserSync for sass and watch functions
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: ''
        }
    });
});

//defining sass for watch function
gulp.task('sass', function () {
    return gulp.src('sass-lynda/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});



//I am The Watcher
gulp.task('watch', ['browserSync'], function () {
    //reloads css when scss is saved
    gulp.watch('sass-lynda/**/*.scss', ['sass']);
    //reloads browser when html or js changes
    gulp.watch('sass-lynda/**/*.html', browserSync.reload);
    gulp.watch('sass-lynda/**/*.php', browserSync.reload);
    gulp.watch('sass-lynda/**/*.js', browserSync.reload);
});
