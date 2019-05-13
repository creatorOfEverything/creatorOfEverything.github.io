var gulp = require("gulp"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync"),
  svgSprite = require("gulp-svg-sprite"),
  svgmin = require("gulp-svgmin"),
  cssmin = require("gulp-cssmin"),
  rename = require("gulp-rename"),
  cheerio = require("gulp-cheerio"),
  replace = require("gulp-replace"),
  include = require("gulp-include"),
  reload = browserSync.reload,
  babel = require("gulp-babel");

gulp.task("sass", function() {
  return gulp
    .src(["scss/style.scss", "!" + "scss/**/_*.scss"])
    .pipe(sass({ includePaths: ["scss"] }))
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("css"))
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("css/minified"));
});

gulp.task("browser-sync", function() {
  browserSync.init(["css/**/*.css", "js/*.js", "index.html"], {
    index: "index.html",
    // proxy: "yourlocal.dev",
    server: {
      baseDir: "./"
    }
  });
});

gulp.task("svgSpriteBuild", function() {
  return (
    gulp
      .src("media/icons/svg/*.svg")
      // minify svg
      .pipe(
        svgmin({
          js2svg: {
            pretty: false
          }
        })
      )
      // remove all fill, style and stroke declarations in out shapes
      .pipe(
        cheerio({
          run: function($) {
            $("[fill]").removeAttr("fill");
            $("[stroke]").removeAttr("stroke");
            $("[style]").removeAttr("style");
          },
          parserOptions: { xmlMode: true }
        })
      )
      // cheerio plugin create unnecessary string '&gt;', so replace it.
      .pipe(replace("&gt;", ">"))
      // build svg sprite
      .pipe(
        svgSprite({
          mode: {
            symbol: {
              sprite: "../sprite.html",
              render: {
                scss: {
                  dest: "scss/templates/_sprite.scss",
                  template: "scss/templates/_sprite_template.scss"
                }
              }
            }
          }
        })
      )
      .pipe(gulp.dest("media/sprites/"))
  );
});

gulp.task("babel", function() {
  gulp
    .src("js/main.js")
    .pipe(include())
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(gulp.dest("js/es5"));
});

gulp.task("default", ["browser-sync", "sass", "babel"], function() {
  gulp.watch("scss/**/*.scss", ["sass"]);
  gulp.watch("js/main.js", ["babel"]);
  gulp.watch("index.html");
});
