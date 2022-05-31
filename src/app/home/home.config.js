function HomeConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('home', {
            url: '',
            controller: 'HomeCtrl',
            controllerAs: '$ctrl',
            // template :`
            //   <div>  {{$ctrl.name}} </div>
            // `
            templateUrl: 'home.html'
        });

};

// Create the module where our functionality can attach to
let homeModule = angular.module('home', []);

// Include our UI-Router config settings
homeModule.config(HomeConfig);


class HomeCtrl {
    constructor($scope) {
        'ngInject';

        this.title = "AngularJS";
    }
}


// Controllers
homeModule.controller('HomeCtrl', HomeCtrl);
