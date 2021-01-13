
let render = document.getElementById('pokemon');

fetch('https://pokeapi.co/api/v2/pokemon/pikachu/')
.then(response =>response.json())
.then(data =>{
    let img = document.createElement('img');
    img.src = data.sprites.front_shiny;


    let p = document.createElement('p');
    p.innerText=data.name;

    render.appendChild(img)
    render.appendChild(p);
});
//fetch =>mdn
//recuperer un pokemon
//GET
//adresse =>url >endpoint

//pokeapi

//injecter un pokemon dans la balise #pokemon

//JSON.parse(response)