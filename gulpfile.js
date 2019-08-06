const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const ifElse = require('gulp-if-else');
const argv = require('yargs').argv;
const w3cjs = require('gulp-w3cjs');

gulp.task('images', () => {
  gulp.src(['source/images/**/*.{jpg,jpeg,png,gif,svg,webp}'])
    .pipe(ifElse(argv.compress, () => imagemin()))
    .pipe(gulp.dest('build/images'));
});

gulp.task('w3validate', () => {
  gulp.src('build/html/**/*.html')
    .pipe(w3cjs())
    .pipe(w3cjs.reporter());
});

gulp.task('fonts', () => {
  gulp.src(['source/css/fonts/**/*.{woff,woff2,eot,ttf}',])
    .pipe(gulp.dest('build/css/fonts'));
});
