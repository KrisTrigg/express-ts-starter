requirejs.config({
    baseUrl: '',
    paths: {
        jquery: 'js/vendor/jquery/dist/jquery.min',
        knockout:'js/vendor/knockout/build/output/knockout-latest',
        "knockout-amd-helpers":'js/vendor/knockout-amd-helpers/build/knockout-amd-helpers.min',
        domready: 'js/vendor/domready/ready.min'
    }
})

define(['knockout', 'knockout-amd-helpers', 'js/main'], (ko, amd, main: {load:Function}) => {

    main.load();
});