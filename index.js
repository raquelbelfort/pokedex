const finish = (pokemon) => {
    const image = document.getElementById("foto");
    image.src = pokemon.sprites.other["official-artwork"].front_default;

    const name = document.getElementById("nome");
    name.innerHTML = pokemon.name;
}

const urlPokemon = () => {
    const number = Math.round(Math.random() * 150) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${number}`; 
    return url;
}

const iniciar = async () => {
    const url2 = urlPokemon();
    const response = await fetch(url2);
    const result = await response.json();
    finish(result);
};


document.addEventListener('DOMContentLoaded', iniciar);