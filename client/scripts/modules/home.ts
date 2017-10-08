import * as ko from 'knockout';
class ViewModel {
    public title = ko.observable("Home");
    public details = ko.observable("some details");
}

//export initialize function for module binding
export var initialize = () => {
    return new ViewModel();
}