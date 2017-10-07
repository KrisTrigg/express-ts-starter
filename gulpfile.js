console.log("Building");
var gulp = require("gulp");
var ts = require("gulp-typescript");
var open = require('gulp-open');
var gulpSequence = require('gulp-sequence')
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');

var serverProject = ts.createProject("server/tsconfig.json");
gulp.task("server", function () {
    return serverProject
        .src()
        .pipe(sourcemaps.init())
        .pipe(serverProject())
        .js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("./server"));
});
var clientProject = ts.createProject("client/tsconfig.json");
gulp.task("client", function () {
    return clientProject
        .src()
        .pipe(sourcemaps.init())
        .pipe(clientProject())
        .js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("./client/js"));
});

gulp.task('browse', function () {
    setTimeout(function () {
        var options = {
            uri: 'http://localhost:3000'
        };
        gulp.src(__filename)
            .pipe(open(options));
    }, 250);

});

gulp.task("default", ["client", "server"]);

//gulp.task("default", gulpSequence("build", "browse"));