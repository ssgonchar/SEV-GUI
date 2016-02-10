/**
 * Created by ssgonchar on 10.02.2016.
 */
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// Init app
gulp.task('watch:app', reload);

// Reload page.
gulp.task('start:dev', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            proxy: 'localhost:8000',
            baseDir: "./",
            port: 3000
        }
    });

    gulp.watch("*", ['watch:app']);
});