const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/dashboard/js/app.js', 'public/backend/js')
    .sass('resources/dashboard/scss/style.scss', 'public/backend/css')
    .sass('resources/dashboard/scss/responsive.scss', 'public/backend/css/responsive.css')
    .version()
    .extract();
