let pokemonList = [
    {name: 'Bulbasaur', height: 7, type: 'grass'},
    {name: 'Ivysaur', height: 8, type: 'poison'},
    {name: 'Venusaur', height: 9, type: 'quick'}
];


for (let i = 0; i < pokemonList.length; i++) {
    document.write('Name: ', pokemonList[i].name)
    document.write('<br>');
    document.write('Height: ', pokemonList[i].height);
    document.write('<br>');
    document.write('<br>');
}

if (pokemonList[i].height > 8) {
    document.write('Wow that is big!');
}