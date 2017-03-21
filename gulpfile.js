
    // 声明组件调用
    var gulp = require('gulp'),
        cleancss = require('gulp-clean-css'),
        concat=require('gulp-concat'),   //合并文件
        uglify=require('gulp-uglify'),   //js压缩
        rename=require('gulp-rename'),   //文件重命名
        jshint=require('gulp-jshint'),   //js检查
        notify=require('gulp-notify');   //提示
        paths = {
            root: './',
            visdark: {
                root: 'visdark/',
                styles: 'visdark/css/',
                scripts: 'visdark/js/'
            },
            dist: {
                root: 'docs/dist/',
                styles: 'docs/dist/css/',
                scripts: 'docs/dist/js/'
            },
            source: {
                root: 'src/',
                styles: 'src/less/',
                scripts: 'src/js/*.js'
            }
        },
        software = {
        filename: 'software',
        banner: [
            '/**',
            ' * FXBTG 版权设置',
            ' * 前端框架：visdark',
            ' * 许可:MIT',
            ' * 发布时间:2017年3月21日',
            ' */',
            ''].join('\n')
    };

    // 生成主要JS和CSS
    gulp.task('main', function (cb) {
        gulp.src('./src/css/*.css')
            .pipe(concat('main.css'))
            .pipe(gulp.dest('./docs/dist/css/'))
            .pipe(cleancss())
            .pipe(rename({suffix:'.min'}))
            .pipe(gulp.dest('./docs/dist/css/'))
            .pipe(notify({message:'压缩主要CSS已经成功'}));
        gulp.src('./src/js/*.js')
            .pipe(concat('main.js'))
            .pipe(gulp.dest('./docs/dist/js/'))
            .pipe(uglify())
            .pipe(rename({suffix:'.min'}))
            .pipe(gulp.dest('./docs/dist/js/'))
            .pipe(notify({message:'压缩主要JS已经成功'}));
        cb();
    });
    // 生成插件JS和CSS
    gulp.task('plug', function (cb) {
        gulp.src('./src/plug/*.css')
            .pipe(concat('plug.css'))
            .pipe(gulp.dest('./docs/dist/css/'))
            .pipe(cleancss())
            .pipe(rename({suffix:'.min'}))
            .pipe(gulp.dest('./docs/dist/css/'))
            .pipe(notify({message:'压缩插件CSS已经成功'}));
        gulp.src('./src/plug/*.js')
            .pipe(concat('plug.js'))
            .pipe(gulp.dest('./docs/dist/js/'))
            .pipe(uglify())
            .pipe(rename({suffix:'.min'}))
            .pipe(gulp.dest('./docs/dist/js/'))
            .pipe(notify({message:'压缩插件JS已经成功'}));
        cb();
    });
