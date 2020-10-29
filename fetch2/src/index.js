




let allPokemonData = []
const pokemonContainer = document.querySelector('#pokemon-container')
const pokemonSearchInput = document.querySelector('#pokemon-search-form')
const pokemonForm = document.querySelector('#pokemon-post-form')

fetch('http://localhost:3000/pokemon')
  .then(responseObject => responseObject.json())
  .then(pokeJSONData => {
    allPokemonData = pokeJSONData

    pokemonContainer.innerHTML = renderAllPokemon(pokeJSONData)
})

pokemonSearchInput.addEventListener('input', (event) => handleSearchInput(event, allPokemonData, pokemonContainer))

pokemonContainer.addEventListener('click', (event) => handleClick(event))


pokemonForm.addEventListener('submit', (event) => handleAddPokemon(event))






// Delete a Pokemon
// listen for a click on the pokemon container
// isolate clicks that are happening on the delete btn
//   if true:
//      scrape the id of the clicked pokemon from its data- attr
//      send a delete req
//      update the front end by removing the pokemon card div



// Add new pokemon
//  find the form of the dom
// event listener for the form
//   prevent the default opf the form
//   capture the form date
//   update the backend by sending a POST req
//   add the newly created pokemon to the dom
