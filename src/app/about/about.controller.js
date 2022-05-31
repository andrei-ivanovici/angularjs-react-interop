class AboutCtrl {
    constructor() {
        'ngInject';
        this.title = "About";
        this.name = "Joe";
    }

    onChange = (newValue) => {
        this.name = newValue;
    };

}

// Controllers
angular.module('about', [])
    .controller('AboutCtrl', AboutCtrl);
