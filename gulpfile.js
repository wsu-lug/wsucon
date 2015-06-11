var gulp = require('gulp'),
	bower = require('gulp-bower')
	concat = require('gulp-concat')
	declare = require('gulp-declare')
	handlebars = require('gulp-handlebars')
	notify = require('gulp-notify')
	rename = require('gulp-rename')
	sass = require('gulp-ruby-sass')
	wrap = require('gulp-wrap');

var config = {
	sassDir: './source/sass',
	binDir: './source/bin'
	cssDir: './source/css'
	fontAweDir: './source/font-awesome'
	fontRegDir: './source/fonts'
	jsDir: './source/js'
	bowerDir: './bower_components'
	templateDir: './source/templates'
}

gulp.task('bower', function() {
	return bower()
		.pipe(gulp.dest(config.bowerDir))
});


gulp.task('icons', function() {
	return gulp.src(config.bowerDir + '/fontawesome/fonts/**.*')
		.pipe(gulp.dest('./public/fonts'));
});

// TODO: rebuild for startbootstrap
gulp.task('css', function() {
	return gulp.src(config.sassPath + '/style.scss')
		.pipe(sass({
			style: 'compressed',
			loadPath: [
				//'./source/sass',
				//config.bowerDir + '/bootstrap-sass/assets/stylesheets',
				//config.bowerDir + '/fontawesome/scss',
			]
		})
			.on("error", notify.onError(function (error) {
				return "Error: " + error.message;
			})))
		.pipe(gulp.dest('./public/css'));
});

// TODO: working on templating with handlebars
// from : ./source/templates
// include : ./source/pages
// dest : ./public
gulp.task('templates', function() {
	gulp.src('config.templates' + '/*.hbs')
		.pipe(handlebars())
		.pipe(wrap('Handlebars.template(<%= contents %>)'))
		.pipe(declare({
			namespace: 'pages.templates',
			noRedeclare: true,
		}))
		//.pipe(concat())
		.pipe(gulp.rename('index.html'))
		.pipe(gulp.dest('./public/'));
})


gulp.task('watch', function() {
	gulp.watch(config.sassPath + '/**/*.scss', ['css']);
});


gulp.task('default', ['bower', 'icons', 'css']);
