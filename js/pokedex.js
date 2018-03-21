var pokeApp = angular.module('pokedex', ['ngResource','ui.router']);

// With this you can inject POKEAPI url wherever you want
pokeApp.constant('POKEAPI', 'http://pokeapi.co');

pokeApp.controller('byName', function($scope,getSpecies,getPokemons, SomeService,SharedService,getPokemonByName,$state) {
    vm=this;
    
  
   getSpecies.get( function(data) {
$scope.liste=data;
console.log($scope.liste);
});
   
getPokemons.get(function(data) {
        $scope.pokemons = data.results;
        console.log($scope.pokemons)
       
});


/*$scope.$watch('pokemonName',function(){
	console.log('toto');
		$state.go('pokemonDetail');
});
*/
 $scope.showPokemon=function () {
    
    getPokemonByName.get({ pokemonName: $scope.pokemonSelected},function(data) {
	console.log(data)
	swal(
                'Trouvé',
                "Pokemon " + $scope.pokemonSelected,
                'success'
            )
},function () {
               swal(
                   'Erreur',
                   'Compte inexistant',
                   'error'
               )

           })
}
$scope.found=0
$scope.chercherPokemon=function(nom){
	
	getPokemonByName.get({ pokemonName: nom},function(data) {
 	$scope.nomDuPokemon=data.name;
	$scope.id=data.id;
	$scope.moves=data.moves;
	console.log($scope.moves)

	/*swal(
                'Trouvé',
                "Pokemon " + nom,
                'success'
            )*/
	$scope.found=1
},function () {
               /*swal(
                   'Erreur',
                   'Ce pokémon n\'existe pas',
                   'error'
               )*/
$scope.found=0
           })
}



$scope.MiseAjour=function(nom){
	SharedService.pokemonName=nom;
	// 
	
	
}
  

  //SharedService.id = '1';
  //SharedService.pokemonName = 'pikachu';
  //$scope.pokemonName= SharedService.pokemonName;
    //$scope.id= SharedService.id;

  //console.log($scope.id)
//console.log($scope.pokemonName)


});

pokeApp.directive("myDirective",function(){
	return {
    templateUrl: './new.html'
  };
})

pokeApp.controller('byName', function($scope,getSpecies,getPokemons, SomeService,SharedService,getPokemonByName,$state) {
    vm=this;


    getSpecies.get( function(data) {
        $scope.liste=data;
        console.log($scope.liste);
    });

    getPokemons.get(function(data) {
        $scope.pokemons = data.results;
        console.log($scope.pokemons)

    });


	/*$scope.$watch('pokemonName',function(){
	 console.log('toto');
	 $state.go('pokemonDetail');
	 });
	 */

     //FONCTION NON UTILISE
   /* $scope.showPokemon=function () {

        getPokemonByName.get({ pokemonName: $scope.pokemonSelected},function(data) {
            console.log(data)
            swal(
                'Trouvé',
                "Pokemon " + $scope.pokemonSelected,
                'success'
            )
        },function () {
            swal(
                'Erreur',
                'Compte inexistant',
                'error'
            )

        })
    }*/
    $scope.found=0
      //FONCTION NON UTILISE
    /*$scope.chercherPokemon=function(nom){

        getPokemonByName.get({ pokemonName: nom},function(data) {
            $scope.nomDuPokemon=data.name;
            $scope.id=data.id;
            $scope.moves=data.moves;
            console.log($scope.moves)

			swal(
			 'Trouvé',
			 "Pokemon " + nom,
			 'success'
			 )
            $scope.found=1
        },function () {
			swal(
			 'Erreur',
			 'Ce pokémon n\'existe pas',
			 'error'
			 )
            $scope.found=0
        })
    }*/



    $scope.MiseAjour=function(nom){
        SharedService.pokemonName=nom;
        SharedService.id="";
        //


    }


    //SharedService.id = '1';
    //SharedService.pokemonName = 'pikachu';
    //$scope.pokemonName= SharedService.pokemonName;
    //$scope.id= SharedService.id;

    //console.log($scope.id)
//console.log($scope.pokemonName)


});





pokeApp.controller('detailPokemon', function($scope,getSpecies,getPokemons,getPokemonByName, SomeService,SharedService,getPokemonByid) {
  console.log(SharedService.id);
	$scope.img="./img/poke-load.gif";
  

	if(SharedService.id=="")
	{
        getPokemonByName.get({ pokemonName: SharedService.pokemonName},function(data) {
            $scope.nomDuPokemon=data.name;
            $scope.id=data.id;
            $scope.moves=data.moves;
            $scope.img=data.sprites.front_default;
            console.log(data);

			/*swal(
			 'Trouvé',
			 "Pokemon " + nom,
			 'success'
			 )*/
            $scope.found=1
        },function () {
			/*swal(
			 'Erreur',
			 'Ce pokémon n\'existe pas',
			 'error'
			 )*/
            $scope.found=0
        });
	}
	else if(SharedService.pokemonName=="")
	{
        getPokemonByid.get({ id: SharedService.id},function(data) {
            $scope.nomDuPokemon=data.name;
            $scope.id=data.id;
            $scope.moves=data.moves;
            $scope.img=data.sprites.front_default;
            console.log(data);

			/*swal(
			 'Trouvé',
			 "Pokemon " + nom,
			 'success'
			 )*/
            $scope.found=1
        },function () {
			/*swal(
			 'Erreur',
			 'Ce pokémon n\'existe pas',
			 'error'
			 )*/
            $scope.found=0
        });

	}


		   $scope.afficherMove=function(){
	//console.log("");
	$scope.attack="Attack's Name : "+$scope.moveSelected +" ";
	
	
}
  
		   
		   

});

pokeApp.controller('home', function($scope,getSpecies,getPokemons) {
   
});

pokeApp.controller('byID', function($scope,getSpecies,getPokemons, SomeService,SharedService,getPokemonByName,$state,getPokemonByid) {

	$scope.MiseAjour=function(id){
        SharedService.pokemonName='';
        SharedService.id=id;
        //
	}


});