

const foo = 'hi'

console.log(bar, '------');


function handleSearchInput(event, allPokemonData, pokemonContainer) {
  const filteredPokes = allPokemonData.filter(pokeObj => {
    return pokeObj.name.includes(event.target.value.toLowerCase()) })

  const filteredPokeHTML = renderAllPokemon(filteredPokes)
  pokemonContainer.innerHTML = filteredPokeHTML ? filteredPokeHTML : `<p><center>There are no Pokémon here</center></p>`
}



function handleAddPokemon(event){
  event.preventDefault()

  const newPokemon = {
    name: event.target['name'].value,
    sprites: {
       front: event.target['image'].value
    }
  }

  event.target.reset()

  const reqObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPokemon)
  }


  fetch('http://localhost:3000/pokemon', reqObj)
  .then(resp => resp.json())
  .then(pokemon => {
    const pokeHTML =  renderSinglePokemon(newPokemon)
    pokemonContainer.innerHTML += pokeHTML
  })
}

// Pessimistic Rendering: FE is updated only after feedback from the BE
// Optimistic Rendering: FE is updated befire receiving feedback from the BE












function handleClick(event) {
  if (event.target.dataset.action === 'flip') {
    const clickedPokemon = allPokemonData.find((pokemonObject) => pokemonObject.id == event.target.dataset.id)
    event.target.src = (event.target.src === clickedPokemon.sprites.front ? clickedPokemon.sprites.back : clickedPokemon.sprites.front)
  } else if (event.target.dataset.action === 'delete') {
    deletePokemon(event)
  }
}


function deletePokemon(event){
  const pokeId = event.target.dataset.id


  fetch(`http://localhost:3000/pokemon/${pokeId}`, { method: 'DELETE'})
  .then(resp => resp.json())
  .then(data => {
    event.target.parentNode.parentNode.remove()
  })
}







/************************* Helper Fns for Producing HTML **********************/



function renderAllPokemon(pokemonArray) {
  return pokemonArray.map(renderSinglePokemon).join('')
}




function renderSinglePokemon(pokemon) {
  return (`
  <div class="pokemon-card">
    <div class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div class="pokemon-image">
        <img data-id=${pokemon.id} data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
      </div>
      <button data-id=${pokemon.id} data-action="delete" class="pokemon-button">Delete</button>
    </div>
  </div>`)
}














