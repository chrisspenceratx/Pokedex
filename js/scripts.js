// Pokemon character specs
let pokemonList = [
    {name: 'Bulbasaur', height: 7, type: 'grass'},
    {name: 'Ivysaur', height: 8, type: 'poison'},
    {name: 'Venusaur', height: 9, type: 'quick'}
];

// Loops for Pokemon names/heights
for (let i=0; i < pokemonList.length; i++)  {
    if (pokemonList[i].height >= 8) {
    document.write(pokemonList[i].name + " (" + "height " + pokemonList[i].height + ") " + "- Wow thats big! <br />");
    } else {
    document.write(pokemonList[i].name + " (" + "height " + pokemonList[i].height + ") <br />");
    }
    }