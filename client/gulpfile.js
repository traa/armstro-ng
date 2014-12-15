var gulp = require('gulp');
var ngHtml2Js = require("gulp-ng-html2js-ext");
var concat = require("gulp-concat");
//var map = require('vinyl-map');

var insert = require('gulp-insert');
var clean = require('gulp-clean');

var csso = require('gulp-csso');
var run = require('gulp-run');
var Q = require('q');
var fs = require('fs');
var path = require('path');

var ngConstant = require('gulp-ng-constant');

//var watch = require('gulp-watch');


/*
* r.js -o build.js
*/




//var debug = require('gulp-debug');
// var uglify = require('gulp-uglify');
// var imagemin = require('gulp-imagemin');

gulp.task('html2js', function () {
    'use strict';
    gulp.src("./js/components/**/*.html")
        .pipe(ngHtml2Js({
            moduleName: function (file) {

                

                var path = file.path.split('/'),
                    module = path[path.length - 3],
                    folder = path[path.length - 2],
                    name = path[path.length - 1];

                return module + '/' + folder + '/' + name;
            }
        }))
        .pipe(concat("partials.js"))
        .pipe(insert.wrap("define( [ 'angular' ], function( angular ) {", "});"))
        .pipe(gulp.dest('./js/bundles'));
});

gulp.task('clear', function () {
    'use strict';
    gulp.src(["./public/build.txt"])
        .pipe(clean());
});


gulp.task('watch', function () {
    'use strict';

    gulp.watch(["./js/components/**/*.html"], ["html2js"]);
  //  gulp.watch(["./assets/**"], ["css-compile"]);
});






gulp.task('css-clean', function () {
    'use strict';

    var filesToClean = ["./.sass-cache"],
        argv = require('yargs').argv,
        projectConfiguration = argv.projectConfiguration;

    if (projectConfiguration !== "ADDEVLocal") {
        filesToClean.push('./assets/css/index.css.map');
    }

    gulp.src(filesToClean).pipe(clean());
});

