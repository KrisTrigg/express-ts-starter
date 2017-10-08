class ModuleRegister {
    public get modules() {
        return [
            'home', 'calendar', 'contact'
        ];
    }
}

export var register = new ModuleRegister();