pokeApp.config(['$resourceProvider',function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;

   
}]);

pokeApp.config(function($stateProvider,$urlRouterProvider,$httpProvider){

   $stateProvider.state('pokemonDetail',{

        url : '/pokemonDetail',
        templateUrl:'views/detailPokemon.html',
        controller:'detailPokemon',
        title : 'Pokemon Detail'

    });

        $stateProvider.state('byName',{

        url : '/byName',
        templateUrl:'views/byName.html',
        controller:'byName',
        title : 'Recherche par nom'

    });


    $stateProvider.state('byID',{

        url : '/byID',
        templateUrl:'views/byID.html',
        controller:'byID',
        title : 'Recherche par id'

    });

           $stateProvider.state('home',{

        url : '',
        templateUrl:'views/home.html',
        controller:'home',
        title : 'Home'

    });

});