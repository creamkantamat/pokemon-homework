import "./style.scss";

//createpokemon
const btnCreatePokemon = document.getElementById("btn-create");
if (btnCreatePokemon != null) {
  btnCreatePokemon.addEventListener("click",function () {
    console.log("click");
  });
}

//pokemonlist
const pokemonListElement = document.getElementById('pokemon-list');
if(pokemonListElement != null) {
  const pokemonListUrl = "  http://localhost:3000/pokemon"

  fetch(pokemonListUrl,{
    headers: {
      "Content-Type": "application/json",
    },
  }).then(resp => resp.json())
  .then(data => {
    
    let pokemons = data;
    pokemons.map(p =>{
      let pokemonType = p.type
      .map((t) => {
        return `<div class="type ${t}">${t}</div>`;
      })
      .join("");

      let PokemonElementText = `
      <div class="card">
        <div class="thumbnail-bg">
          <img src="${p.ThumbnailImage}" alt="${p.name}" />
        </div>
        <div>
          <div class="text-sm text-slate-200">#${p.number}</div>
          <h3><div class="text-bold text-2xl text-slate-800">${p.name}</div></h3>
          <div class="flex gap-4">${pokemonType}</div>
        </div>
      </div>`;

      pokemonListElement.insertAdjacentHTML('beforeend',PokemonElementText)
    })
  })
}