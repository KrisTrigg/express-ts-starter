((requirejs: Require) => {

    requirejs.config({
        baseUrl: '',
        shim: {
            "bootstrap": { "deps": ['jquery'] },
            "knockout-amd": { "deps": ["knockout"] },
            "scripts/main": { "deps": ["knockout-amd", "bootstrap"] }
        },
        paths: {
            text: 'scripts/vendor/requirejs-text-2.0.15',
            jquery: 'scripts/vendor/jquery/jquery.min',
            knockout: 'scripts/vendor/knockout/knockout-latest',
            "knockout-amd": 'scripts/vendor/knockout/knockout-amd-helpers',
            domready: 'scripts/vendor/domready/ready.min',
            bootstrap: 'scripts/vendor/bootstrap/js/bootstrap.min'
        }
    })

    define(['knockout','scripts/main'], (ko) => {
        
        ko.amdTemplateEngine.defaultPath = '';
        ko.amdTemplateEngine.defaultSuffix = '.html';
        ko.bindingHandlers.module.baseDir = '';
        
        console.log('Loaded root deps');
    });

})(requirejs);