requirejs.config({
    baseUrl: '',
    shim: {
        "bootstrap": { "deps": ['jquery'] }
    },
    paths: {
        jquery: 'js/vendor/jquery/jquery.min',
        knockout: 'js/vendor/knockout/knockout-latest',
        "knockout-amd": 'js/vendor/knockout/knockout-amd-helpers.min',
        domready: 'js/vendor/domready/ready.min',
        bootstrap: 'js/vendor/bootstrap/js/bootstrap.min'
    }
})

define(['knockout', 'knockout-amd', 'bootstrap', 'js/main'], (ko) => {
    console.log('Loaded root deps');
    var css = ` 
[data-bind]{
    display: initial!important;
}`,
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));

    head.appendChild(style);
});