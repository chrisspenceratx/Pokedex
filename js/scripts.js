let pokemonRepository = (function () {
    let modalContainer = document.querySelector('#modal-container');
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    
    
  //  ---------- ShowModal data listed below --------- //

      function showModal() {
        modalContainer.classList.add('is-visible');
      }

      function showModal(title, text, apiUrl) {
        
      
  // Clear all existing modal content
        modalContainer.innerHTML = '';
      
  // Declares new div and adds modal CSS sclass //
        let modal = document.createElement('div');
        modal.classList.add('modal');
      
  // Button content for modal
        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);

        
  // Content within the modal //
        let titleElement = document.createElement('h1');
        titleElement.innerText = title;
        let contentElement = document.createElement('p');
        contentElement.innerText = text;
        let imageElement = document.createElement('img');
        imageElement.src = apiUrl;
        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modal.appendChild(imageElement);  
        modalContainer.appendChild(modal);
        modalContainer.classList.add('is-visible');
      }

    function hideModal() {
        modalContainer.classList.remove('is-visible');
    }

  // Esc key content for modal //
        window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
          hideModal();  
        }
      });

  // Overlay click content - closes on click outside modal //
        modalContainer.addEventListener('click', (e) => {
        let target = e.target;
        if (target === modalContainer) {
          hideModal();
        }
      });
  
  //  ---------- ShowModal data listed above --------- //
    function add (pokemon) {
        pokemonList.push(pokemon);
    }

  // Functions that displays all pokemon buttons on loading page. //
    function getAll() {
        return pokemonList;
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          item.Url = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        }).catch(function (e) {
          console.error(e);
        });
    }

    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function () {
        showModal(item.name, item.height, item.Url);
        });
    }

  // Function that immediately loads content to console from buttons listed. //
    function loadList() {
      return fetch(apiUrl).then(function (response) {
      return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
          console.log(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
      }  

  // Function that responds to clicking each pokemon button, loading console content. //
    function addListItem(pokemon){
      let pokemonList = document.querySelector(".pokemon-list");
      let listpokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button-class");
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
      button.addEventListener("click", function(event) {
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
            showDetails: showDetails
          }   

})();
    
    pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach (function(pokemon) {
    pokemonRepository.addListItem(pokemon);
    }); 
      
    }); 