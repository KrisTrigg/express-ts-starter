requirejs.config({
    baseUrl: '',
    shim: {
        "bootstrap": { "deps": ['jquery'] }
    },
    paths: {
        jquery: 'js/vendor/jquery/jquery.min',
        knockout: 'js/vendor/knockout/knockout-latest',
        "knockout-amd-helpers": 'js/vendor/knockout-amd-helpers/knockout-amd-helpers.min',
        domready: 'js/vendor/domready/ready.min',
        bootstrap: 'js/vendor/bootstrap/js/bootstrap.min'
    }
})

define(['knockout', 'knockout-amd-helpers', 'bootstrap', 'js/main'], (ko) => {
    console.log('Loaded root deps');
});