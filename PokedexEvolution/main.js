window.onload = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/1`).then(Response => {
    return Response.json()
  }).then(finalObject => {
    let id = 1
    let name = 'Bulbasaur'
    document.querySelector('#pokemonGif').src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
    document.querySelector('#descriptionInfo').innerHTML = `${id} - ${name.charAt(0).toUpperCase() + name.slice(1)}`
  })
}

// busca pokemon na POKE API
function searchPokemon() {
  let pokemon = document.querySelector('#inputPokemon').value
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`).then(Response => {
    return Response.json()
  }).then(finalObject => {
    var id = finalObject.id
    let name = finalObject.name
    document.querySelector('#pokemonGif').src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
    document.querySelector('#descriptionInfo').innerHTML = `${id} - ${name.charAt(0).toUpperCase() + name.slice(1)}`
  })
}

// funções de envio do formulario
document.querySelector('#buttonSearch').addEventListener('click', searchPokemon)


