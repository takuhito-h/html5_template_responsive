/*------------------------------------------------------------------------------------------------

    watch

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import watch from 'gulp-watch';
import setting from '../setting/watch.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('watch', function () {
    watch(setting.ect, function(){
        gulp.start(['ect']);
    });

    watch(setting.iconfont, function(){
        gulp.start(['iconfont']);
    });

    watch(setting.css, function(){
        gulp.start(['css']);
    });

    watch(setting.js, function(){
        gulp.start(['webpack']);
    });
});
