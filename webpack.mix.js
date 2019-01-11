const mix = require('laravel-mix');

mix.js(`sliders/app.js`, `dist/app.js`);

mix.copy(`sliders/index.html`, `dist/index.html`);

mix.browserSync({
	proxy: '',
	server: 'dist/',
	files: ['sliders/*/*/*'],
});
