let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  // Nav stuff below //

  let search = document.getElementById("pokemon-search");
  search.addEventListener("input", searchList);

  function searchList() {
    let searchInput = document.getElementById("pokemon-search").value;
    searchInput = searchInput.toLowerCase();
    let listItem = $("li");
    listItem.each(function () {
      let item = $(this);
      let name = item.text();
      if (name.includes(searchInput)) {
        item.show();
      } else {
        item.hide();
      }
    });
  }

  //  ---------- ShowModal data listed below --------- //

  function showModal(title, text, apiUrl) {
    // added variables to connect to BS modal terms//
    let modalBody = document.querySelector(".modal-body");
    let modalTitle = document.querySelector(".modal-title");
    let modalHeader = document.querySelector(".modal-header");

    modalTitle.innerHTML = "";
    modalBody.innerHTML = "";

    // Content within the modal //
    let titleElement = document.createElement("h1");
    titleElement.innerText = title;
    let contentElement = document.createElement("p");
    contentElement.innerText = text;
    let imageElement = document.createElement("img");
    imageElement.src = apiUrl;
    modalTitle.append(titleElement);
    modalBody.append(contentElement);
    modalBody.append(imageElement);
  }

  //  ---------- ShowModal data listed above --------- //
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  // Functions that displays all pokemon buttons on loading page. //
  function getAll() {
    return pokemonList;
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.Url = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);

        url.classList.add("list-group-item");
      });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      showModal(item.name, item.height, item.Url);
    });
  }

  // Function that immediately loads content to console from buttons listed. //
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
          console.log(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // Function that responds to clicking each pokemon button, loading console content. //
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".list-group");
    let listpokemon = document.createElement("li");
    // Added "list-group-item" to li element for BS //
    listpokemon.classList.add("list-group-item");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    // Added "btn-primary" class for button for//
    button.classList.add("btn", "btn-custom", "col-12", "mx-auto");
    button.classList.add("list-group-item", "list-group-item-action");
    button.setAttribute("data-target", "#pokemonBS-modal");
    button.setAttribute("data-toggle", "modal");

    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }

  // Returns //
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
