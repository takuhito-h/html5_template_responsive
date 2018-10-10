/*------------------------------------------------------------------------------------------------

    webpack

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack-stream';
import uglify from 'gulp-uglify';
import setting from '../setting/webpack.js';

const isRelease = gutil.env.release ? gutil.env.release : false;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('webpack', function () {
    return gulp
        .src('')
        .pipe(webpack(setting))
        .pipe(isRelease ? uglify() : gutil.noop())
        .pipe(gulp.dest(''))
    ;
});
