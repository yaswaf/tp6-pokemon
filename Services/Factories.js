pokeApp.factory("getSpecies", function($resource) {
    return $resource("https://pokeapi.co/api/v2/pokemon-species/?limit=20");
});
pokeApp.factory("getPokemons", function($resource) {
    return $resource("https://pokeapi.co/api/v2/pokemon/?limit=20");
});
pokeApp.service('SomeService', function($timeout, $rootScope){
        this.generateEvent = function(){
            $timeout(function(){
                $rootScope.$broadcast('event:show', {name: 'pikachu'});
            }, 3000);    
        }
        
    })
pokeApp.factory('SharedService', function() {
 
 var Service = {
    id:'',pokemonName: ''
  };
 
 return Service;
});
pokeApp.factory("getPokemonByName", function($resource) {
    return $resource("https://pokeapi.co/api/v2/pokemon/:pokemonName");
});
pokeApp.factory("getPokemonByid", function($resource) {
    return $resource("https://pokeapi.co/api/v2/pokemon/:id");
});

