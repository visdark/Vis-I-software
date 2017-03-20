
    // 声明组件调用

    var gulp = require('gulp'),
        cleanCSS = require('gulp-clean-css');

    // 压缩CSS
    gulp.task('min-css',function() {
        gulp.src(['./visdark/vis-*.css'])
            .pipe(cleanCSS())
            .pipe(gulp.dest('./docs/dist/css/'));
    });

