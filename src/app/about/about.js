// Include our UI-Router config settings
function HomeConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('about', {
            url: '/about',
            controller: 'AboutCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'about.html'
        });

}

angular.module("about")
    .config(HomeConfig);


