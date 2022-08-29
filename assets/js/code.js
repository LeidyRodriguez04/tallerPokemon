function consumir_api(url_api){    
    //let url_api = "https://pokeapi.co/api/v2/pokemon"
    let consumo1 = fetch(url_api)
    consumo1.then(res1 => res1.json())
    .then(data_pokemon => {
      document.querySelector("#carta_pokemon").innerHTML = ''
      for (const pokemon of data_pokemon.results) {
        let consumo2 = fetch(pokemon.url)
        consumo2.then(res2 => res2.json())
        .then(pokemon_info => {
          //console.log(pokemon_info)
            for (const estadistica of pokemon_info.stats) {  
                //console.log(estadistica.stat.name)
                }
            
                document.querySelector("#carta_pokemon").innerHTML += `
                <div class="col  bg-warning border shadow p-3 mb-5 me-4 w-25 carta_pokemon">
                <div class="border p-3 bg-white">
                <h5 class="card-title text-star mb-3 text-uppercase px-2">${pokemon_info.name}</h5>                
                <img src="${pokemon_info.sprites.other.home.front_default
                }" class="card-img-top w-75 ms-4 border border-3" alt="...">
                <div class="card-body my-3">
                    <div class="row">                    
                        <div class="col-4">
                            <label class="text-capitalize">${pokemon_info.stats[0].stat.name}</label>
                        </div>
                        <div class="col-8">
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: ${pokemon_info.stats[0].base_stat}%;" aria-valuenow="${pokemon_info.stats[0].base_stat}" aria-valuemin="0" aria-valuemax="100">${pokemon_info.stats[0].base_stat}%</div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <label class="text-capitalize">${pokemon_info.stats[1].stat.name}</label>                            
                        </div>
                        <div class="col-8">
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: ${pokemon_info.stats[1].base_stat}%;" aria-valuenow="${pokemon_info.stats[1].base_stat}" aria-valuemin="0" aria-valuemax="100">${pokemon_info.stats[1].base_stat}%</div>
                            </div>
                    </div>
                        <div class="col-4">
                            <label class="text-capitalize">${pokemon_info.stats[2].stat.name}</label>
                        </div>
                        <div class="col-8">
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: ${pokemon_info.stats[2].base_stat}%;" aria-valuenow="${pokemon_info.stats[2].base_stat}" aria-valuemin="0" aria-valuemax="100">${pokemon_info.stats[2].base_stat}%</div>
                            </div>
                        </div>
                        <div class="col-4">
                            <label class="text-capitalize">${pokemon_info.stats[5].stat.name}</label>                            
                        </div>
                        <div class="col-8">
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: ${pokemon_info.stats[5].base_stat}%;" aria-valuenow="${pokemon_info.stats[5].base_stat}" aria-valuemin="0" aria-valuemax="100">${pokemon_info.stats[5].base_stat}%</div>
                            </div>
                    </div>
                </div> 
                </div>
                
                </div>
                `
            } )        
        } 
        crear_botones(data_pokemon.next, data_pokemon.previous)   
    })
}

function crear_botones(url_pagina_siguiente, url_pagina_anterior) {
    let div_paginacion = document.querySelector("#paginacion")
    div_paginacion.innerHTML = ''
    let boton_siguiente = document.createElement("button")
    boton_siguiente.className = "btn btn-danger"
    boton_siguiente.classList.add("d-flex","justify-content-evenly") 
        // boton_siguiente.classList.add("btn", "btn-dark")
    boton_siguiente.innerText = "Siguiente pagina"
    if (url_pagina_siguiente != null) {
        boton_siguiente.setAttribute("onclick", `consumir_api('${url_pagina_siguiente}')`)
    } else {
        boton_siguiente.setAttribute("disabled", '')
    }
    div_paginacion.appendChild(boton_siguiente)
    let boton_anterior = document.createElement("button")
    boton_anterior.classList.add("btn", "btn-danger")
    boton_anterior.innerText = "Pagina anterior"
    if (url_pagina_anterior != null) {
        boton_anterior.setAttribute("onclick", `consumir_api('${url_pagina_anterior}')`)
    } else {
        boton_anterior.setAttribute("disabled", '')
    }
    div_paginacion.appendChild(boton_anterior)
}
consumir_api("https://pokeapi.co/api/v2/pokemon")



        