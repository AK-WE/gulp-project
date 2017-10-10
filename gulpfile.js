var gulp = require('gulp');
var gulpHtmlmin = require('gulp-htmlmin');
var gulpUglify = require('gulp-uglify');
var gulpConcat = require('gulp-concat');
var gulpRename = require('gulp-rename');
var gulpCleanCss = require('gulp-clean-css');
var gulpLess = require('gulp-less');

gulp.task('htmlmin',[],function(){
    gulp.src(['src/index.html'])
        .pipe(gulpHtmlmin({
            collapseWhitespace: true, // 去掉空白字符
            minifyJS: true,//压缩页面JS
            minifyCSS: true,//压缩页面CSS
            removeComments: true//清除HTML注释
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('jsmin',[],function(){
    gulp.src(['src/js/*.js'])
        .pipe(gulpUglify())
        .pipe(gulpRename({
            dirname: 'js',
            prefix: 'pre_',
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('js',[],function(){
    gulp.src(['src/js/a.js','src/js/b.js','src/js/*.js'])
        .pipe(gulpConcat('js/build.js'))
        .pipe(gulpUglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('cssmin',[],function(){
    gulp.src(['src/css/main.css'])
        .pipe(gulpCleanCss())
        .pipe(gulpRename({
            dirname: 'css',
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('less',[],function(){
    gulp.src(['src/less/main.less'])
        .pipe(gulpLess())
        .pipe(gulpCleanCss())
        .pipe(gulpRename({
            dirname: 'less',
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist'));
});