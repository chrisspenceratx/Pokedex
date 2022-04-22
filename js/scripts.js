//**This was for PT 1.  My PT 1 forEach loop --
//  pokemonList.forEach(function(pokemon) {
//  document.write(pokemon.name + ' is ' + pokemon.height + ' inches long, and ' + pokemon.type + ' type. <br />');
//});    



// IIFE
let pokemonRepository = (function () {
    let pokemonList = [
            {name: 'Bulbasaur', height: 7, type: 'grass'},
            {name: 'Ivysaur', height: 8, type: 'poison'},
            {name: 'Venusaur', height: 9, type: 'quick'}
        ]

// Public Functions     
        function getAll() {
            return pokemonList;
            }

        function add(pokemon) {
        pokemonList.push(pokemon);
        }

    

        return {
            getAll: getAll,
            add: add
        }   
    
    
         })();
    
    
    // Revised PT2 forEach loop
    pokemonRepository.getAll().forEach (function(pokemon) {
        if (pokemon.height >= 8)  {document.write(pokemon.name + ' is ' + pokemon.height + ' inches long, and ' + pokemon.type + ' type. Wow that is big! <br />');
    }   else if (pokemon.height < 8) {document.write(pokemon.name + 'is ' + pokemon.height + ' inches long, and ' + pokemon.type + ' type. <br />');
    }
}); 