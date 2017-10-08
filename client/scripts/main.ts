import * as $ from 'jquery';
import User from './user';
import * as ready from 'domready';
import * as ko from 'knockout';
import { register } from './module-register';

class MainViewModel {
    constructor() {
        $.get('api/user/2').done(data => {
            this.name(new User(data).name);
        });
        this.modules = ko.observableArray(register.modules);
        this.module(register.modules[0]);
    }

    public modules: KnockoutObservableArray<string>;
    public module = ko.observable();

    public name: KnockoutObservable<string> = ko.observable<string>();

    public loadModule(name: string) {
        this.module(name);
    }

}
if (ready) { }
ko.applyBindings(new MainViewModel());