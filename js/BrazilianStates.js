const ulrUF= 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

const uf = document.getElementById("uf")
const city = document.getElementById("city")


// evento para entra as cidades
// constantes para ja quando os estados ja forem selecionados, voce so escolhe a Cidade

uf.addEventListener('change', async() =>{
    const urlCities= 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+uf.value+'/municipios'
    const request = await fetch(urlCities)
    const response = await request.json()


    let options =''

    // para acessar as cidades
    response.forEach(function(cities){
        options += '<option>'+cities.nome+'</option>'
    })
    city.innerHTML = options
})



// evento disparado ao carregar a pagina
// preenche os Estados
// o fetch substitui o XMLHttpRequest
window.addEventListener('load', async() => { 
    const request = await fetch(ulrUF);     
    const response = await request.json()

// Para colocar todas as siglas dos Estados

    const options = document.createElement("optgroup")
    options.setAttribute('label','')
    response.forEach(function(uf){

// para criar as opçoes
        options.innerHTML+='<option>'+uf.sigla+'</opption>'

    })
    // para acessar os estados
    uf.append(options)
    

})


