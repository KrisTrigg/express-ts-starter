console.log("Building");
var gulp = require("gulp");
var ts = require("gulp-typescript");

    
var serverProject = ts.createProject("server/tsconfig.json");
gulp.task("server", function () {
    return serverProject.src()
        .pipe(serverProject())
        .js.pipe(gulp.dest("./server"));
});
var clientProject = ts.createProject("client/tsconfig.json");
gulp.task("client", function () {
    return clientProject.src()
        .pipe(clientProject())
        .js.pipe(gulp.dest("./client/js"));
});
gulp.task("default", ["client", "server"]);