((requirejs: Require) => {

    requirejs.config({
        baseUrl: '',
        shim: {
            "bootstrap": { "deps": ['jquery'] },
            "knockout-amd": { "deps": ["knockout"] },
            "scripts/main": { "deps": ["knockout-amd", "bootstrap"] }
        },
        paths: {
            jquery: 'scripts/vendor/jquery/jquery.min',
            knockout: 'scripts/vendor/knockout/knockout-latest',
            "knockout-amd": 'scripts/vendor/knockout/knockout-amd-helpers.min',
            domready: 'scripts/vendor/domready/ready.min',
            bootstrap: 'scripts/vendor/bootstrap/js/bootstrap.min'
        }
    })

    define(['scripts/main'], (ko) => {
        console.log('Loaded root deps');
        showElementsWithBindings();
    });


    var showElementsWithBindings = () => {
        var css = ` 
[data-bind]{
    display: initial!important;
}`,
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));

        head.appendChild(style);
    };

})(requirejs);