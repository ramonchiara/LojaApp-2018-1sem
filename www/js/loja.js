var app = angular.module('starter');

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('principal', {
            url: '/',
            templateUrl: '/views/principal.html',
            controller: 'principalCtrl'
        })
        .state('produto', {
            url: '/produtos/:id',
            templateUrl: '/views/produto.html',
            controller: 'produtoCtrl'
        });
    $urlRouterProvider.otherwise('/');
});

app.controller('principalCtrl', function ($scope) {

});

app.controller('produtoCtrl', function ($scope) {

});
