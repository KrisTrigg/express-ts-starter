import * as $ from 'jquery';
import User from './user';
import * as ready from 'domready';
import * as ko from 'knockout';

class MainViewModel {
    constructor(){
        $.get('api/user/2').done(data => {
            this.name(new User(data).name);
        });
    }
    
    public name: KnockoutObservable<string> = ko.observable<string>();

}

ko.applyBindings(new MainViewModel());