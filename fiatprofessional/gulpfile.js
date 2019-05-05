var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    svgSprite = require('gulp-svg-sprite'),
	svgmin = require('gulp-svgmin'),
	cheerio = require('gulp-cheerio'),
	replace = require('gulp-replace'),
    reload = browserSync.reload;

gulp.task('sass', function () {  
    gulp.src(['scss/style.scss', '!' + 'scss/**/_*.scss'])
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('css'));
});

gulp.task('browser-sync', function() {  
    browserSync.init(["css/*.css", "js/*.js", "index.html"], {
		// proxy: "yourlocal.dev",
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('svgSpriteBuild', function () {
	return gulp.src('assets/icons/*.svg')
	// minify svg
		.pipe(svgmin({
			js2svg: {
				pretty: false
			}
		}))
		// remove all fill, style and stroke declarations in out shapes
		.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true}
		}))
		// cheerio plugin create unnecessary string '&gt;', so replace it.
		.pipe(replace('&gt;', '>'))
		// build svg sprite
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: "../sprite.html",
					render: {
						scss: {
							dest:'../../../scss/templates/_sprite.scss',
							template: "scss/templates/_sprite_template.scss"
						}
					}
				}
			}
		}))
		.pipe(gulp.dest('assets/sprites/'));
});

gulp.task('default', ['sass', 'browser-sync'], function () {  
    gulp.watch("scss/**/*.scss", ['sass']);
});