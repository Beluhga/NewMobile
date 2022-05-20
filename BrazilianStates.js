const ulrUF= 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

const uf = document.getElementById("uf")
const city = document.getElementById("city")

uf.addEventListener('change', async() =>{
    const urlCities= 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+uf.value+'/municipios'
    const request = await fetch(urlCities)
    const response = await request.json()

    let options = ''
    response.forEach(function(cities){
        options += '<option>'+cities.nome+'</option>'
    })
    city.innerHTML = options

})

window.addEventListener('load', async() => {
    const request = await fetch(ulrUF);
    const response = await request.json()

    
    const options = document.createElement("optgroup")
    options.setAttribute('label','Estado')
    response.forEach(function(uf){
        options.innerHTML+='<option>'+uf.sigla+'</opption>'

    })
    uf.append(options)

})


