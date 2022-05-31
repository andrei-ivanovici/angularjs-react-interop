// Create and bootstrap application
const requires = [
    'ui.router',
    'home',
    'about',
    'react'
];
window.app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);
