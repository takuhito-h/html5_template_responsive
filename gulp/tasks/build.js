/*------------------------------------------------------------------------------------------------

    build

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('build', ['ect', 'iconfont', 'css', 'webpack']);
