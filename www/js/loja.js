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

app.controller('principalCtrl', function ($scope, $http) {
    $scope.produtos = [];
    $http.get('produtos.json').then(function (response) {
        $scope.produtos = response.data;
    });
});

app.controller('produtoCtrl', function ($scope, $stateParams) {
    $scope.produto = {
        id: $stateParams.id,
        nome: 'Produto ' + $stateParams.id,
        preco: '123,45'
    };
});
