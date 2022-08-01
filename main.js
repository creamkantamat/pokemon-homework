import "./style.scss";

function pokemonCardText(p) {
  let pokemonType = p.type
  .map((t) => {
    return `<div class="type ${t}">${t}</div>`;
  })
  .join("");

  return `
  <div class="card">
    <div class="thumbnail-bg">
      <img src="${p.ThumbnailImage}" alt="${p.name}" />
    </div>
    <div>
      <div class="text-sm text-slate-200">#${p.number}</div>
      <h3><div class="text-bold text-2xl text-slate-800">${p.name}</div></h3>
      <div class="flex gap-4">${pokemonType}</div>
    </div>
  </div>
  `;
}

//createpokemon
const pokemonListElement = document.getElementById('pokemon-list');

const btnCreatePokemon = document.getElementById("btn-create");
if (btnCreatePokemon != null) {
  btnCreatePokemon.addEventListener("click",function () {
    const pokemonForm = document.getElementById('pokemon-form');
    const name = pokemonForm.querySelector("name").value;
    const type = pokemonForm.querySelector("type").value;
    const data = {
      name: name,
      type: [type],
    };
    const createPokemonUrl = "  http://localhost:3000/pokemon"
    fetch(createPokemonUrl, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      //option1
      //window.location.reload();
      //option2
      pokemonListElement.insertAdjacentHTML('beforeend', pokemonCardText(data));
    });
  });
}

//pokemonlist

if(pokemonListElement != null) {
  const pokemonListUrl =  ` http://localhost:3000/pokemon`;


  fetch ( pokemonListUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(resp => resp.json())
  .then(data => {
    
    let pokemons = data;
    pokemons.map(p =>{
      pokemonListElement.insertAdjacentHTML('beforeend', pokemonCardText(p));
    });
  });
}