let api_pkm = "https://pokeapi.co/api/v2/pokemon"
let consumo1 = fetch(api_pkm)
consumo1.then(res1 => res1.json())
.then(data_api => {
    console.log(data_api)
    for (const pokemones of data_api.results) {
        let consumo2 = fetch(pokemones.url)
        consumo2.then(res2 => res2.json())
        .then(data_api2 => {
            console.log(data_api2)
        for (const pokemones2 of data_api2.sprites) {
            document.querySelector("#carta_pokemon").innerHTML
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text"></p>
            </div>            
            }
        } )
    }
    
}) 

        