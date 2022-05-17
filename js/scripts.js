// IIFE
let pokemonRepository = (function () {
    let pokemonList = [
            {name: 'Bulbasaur', height: 7, type: 'grass'},
            {name: 'Ivysaur', height: 8, type: 'poison'},
            {name: 'Venusaur', height: 9, type: 'quick'}
        ]

        function showDetails(pokemon) {
            console.log(pokemon);
        }

        function addListItem(pokemon){
            let pokemonList = document.querySelector(".pokemon-list");
            let listpokemon = document.createElement("li");
            let button = document.createElement("button");
            button.innerText = pokemon.name;
            button.classList.add("button-class");
            listpokemon.appendChild(button);
            pokemonList.appendChild(listpokemon);
            addClickEvent(button, pokemon);
         }

         function addClickEvent(button,pokemon) {
            button.addEventListener('click', function() {
              showDetails(pokemon);
            });
        }

       


// Public Functions     
        function add(pokemon) {
            if (
                typeof pokemon === "object" &&
                "name" in pokemon &&
                "height" in pokemon &&
                "types" in pokemon
              ) {
                repository.push(pokemon);
              } 
            
            else {
                console.log("pokemon is not correct");
              }
        pokemonList.push(pokemon);
        }

        function getAll() {
            return pokemonList;
            }

           
        
        return {
            getAll: getAll,
            add: add,
            addListItem: addListItem
        }   
    
    
         })();
    
    
    //forEach loop
    pokemonRepository.getAll().forEach (function(pokemon) {
       pokemonRepository.addListItem(pokemon);
       
       

}); 
   
