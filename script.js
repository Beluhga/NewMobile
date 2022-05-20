{
    // Mascara para o CPF
    const input = document.querySelector('#cpf_verifica')

    input.addEventListener('keypress', () => {
        let inputlength = input.value.length
        
        if(inputlength === 3 || inputlength === 7 ){
            input.value += '.'
        } else if (inputlength === 11) {
            input.value += '-'
        }
    })

    }
 
 // Validação do CPF
 function validacpf () {

    var cpf = document.formulario1.cpf_verifica.value;
    cpf = cpf.replace( "." , "" );
    cpf = cpf.replace( "-" , "" );
    cpf = cpf.replace( "." , "" );
    
    if (cpf.length != 11 ||
    cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999"){
    document.getElementById("cpf_verifica").style.backgroundColor = "#faa"; //isso deixa o campo avermelhado
    document.formulario1.cpf_verifica.focus();
    return false;

    } else if (cpf.length != 11 || 
           cpf == "00000000000" || 
           cpf == "11111111111" || 
           cpf == "22222222222" || 
           cpf == "33333333333" || 
           cpf == "44444444444" || 
           cpf == "55555555555" || 
           cpf == "66666666666" || 
           cpf == "77777777777" || 
           cpf == "88888888888" || 
           cpf == "99999999999") {
    return false; 

    } else {
    var soma = 0;
    soma = soma + (parseInt(cpf.substring( 0 , 1))) * 10;
    soma = soma + (parseInt(cpf.substring( 1 , 2))) * 9;
    soma = soma + (parseInt(cpf.substring( 2 , 3))) * 8;
    soma = soma + (parseInt(cpf.substring( 3 , 4))) * 7;
    soma = soma + (parseInt(cpf.substring( 4 , 5))) * 6;
    soma = soma + (parseInt(cpf.substring( 5 , 6))) * 5;
    soma = soma + (parseInt(cpf.substring( 6 , 7))) * 4;
    soma = soma + (parseInt(cpf.substring( 7 , 8))) * 3;
    soma = soma + (parseInt(cpf.substring( 8 , 9))) * 2;
    }
    
    var resto1 = (soma * 10) % 11;
    
    if ((resto1 == 10) || (resto1 == 11)) {
    resto1 = 0;
    }
    
    var soma = 0;
    soma = soma + (parseInt(cpf.substring( 0 , 1))) * 11;
    soma = soma + (parseInt(cpf.substring( 1 , 2))) * 10;
    soma = soma + (parseInt(cpf.substring( 2 , 3))) * 9;
    soma = soma + (parseInt(cpf.substring( 3 , 4))) * 8;
    soma = soma + (parseInt(cpf.substring( 4 , 5))) * 7;
    soma = soma + (parseInt(cpf.substring( 5 , 6))) * 6;
    soma = soma + (parseInt(cpf.substring( 6 , 7))) * 5;
    soma = soma + (parseInt(cpf.substring( 7 , 8))) * 4;
    soma = soma + (parseInt(cpf.substring( 8 , 9))) * 3;
    soma = soma + (parseInt(cpf.substring( 9 , 10))) * 2;
    
    var resto2 = (soma *10) % 11;
    if ((resto2 == 10) || (resto2 == 11)) {
    resto2 = 0;
    }
    
    if (
    (resto1 == (parseInt(cpf.substring( 9 , 10)))) &&
    (resto2 == (parseInt(cpf.substring( 10 , 11)))) ) {
    alert("Certo");
    return true;
    } else {
    alert ("CPF inválido")
    document.getElementById("cpf_verifica").style.backgroundColor = "#faa";
    document.formulario1.cpf_verifica.focus();
    return false;
    }
    
    }
    

    {
        // Mascara do Telefone
        const phone = document.querySelector('#phone')
    
        phone.addEventListener('keypress', () => {
            let phonelength = phone.value.length
            
            if(phonelength === 0 ){
                phone.value += '('
            } else if (phonelength === 3) {
                phone.value += ')'
            }  else if (phonelength === 9) {
                phone.value += '-'
            }

        })
    
    }

    {
        // Contador de caracteres da Observação
        const textArea= document.querySelector("#observation")

        textArea.addEventListener("input", function() {

            let caracterMax = textArea.maxLength;
            let typing = textArea.value.length;

            let ByTyping= document.querySelector('#ByTyping').innerText = (caracterMax - typing);

            if(ByTyping <= 20){
                document.querySelector('#ByTyping').style.color = 'red';
            }else{
                document.querySelector('#ByTyping').style.color = 'black';
            }
        })
    }

    {
        const form = document.getElementById('formulario1')

            const nome =  document.getElementById('nome')
            const birth =  document.getElementById('birth')
            const phone =  document.getElementById('phone')
            const email =  document.getElementById('email')
            const uf =  document.getElementById('uf')
            const city =  document.getElementById('city')
            const district =  document.getElementById('district')
            const street =  document.getElementById('street')
            const complement =  document.getElementById('complement')

            form.addEventListener("input", (e) =>{
                e.preventDefault()

                checkInputs()
            })

            function checkInputs() {
                const nomeValue = nome.value.trim()
                const birthValue = birth.value.trim()
                const phoneValue = phone.value.trim()
                const emailValue = email.value.trim()
                const ufValue = uf.value.trim()
                const cityValue = city.value.trim()
                const districtValue = district.value.trim()
                const streetValue = street.value.trim()
                const complementValue = complement.value.trim()
            
            if(nomeValue === ''){
                // mostrar o erro
                // adicionar a classe error
                errorValidation(nome, 'Preencha esse campo')
            } else {
                // adicionar a classe de sucesso
                successValidation(nome)
            }
            if(birthValue === ''){
               
                errorValidation(birth, 'Preencha esse campo')
            } else {
                
                successValidation(birth)
            }
            if(phoneValue === ''){
                
                errorValidation(phone, 'Preencha esse campo')
            } else {
                
                successValidation(phone)
            }
            if(emailValue === ''){
              
                errorValidation(email, 'Preencha esse campo')
            } else {
               
                successValidation(email)
            }
            if(ufValue === ''){
             
                errorValidation(uf, 'Preencha esse campo')
            } else {
               
                successValidation(uf)
            }
            if(cityValue === ''){
               
                errorValidation(city, 'Preencha esse campo')
            } else {
                
                successValidation(city)
            }
            if(districtValue === ''){
                
                errorValidation(district, 'Preencha esse campo')
            } else {
                
                successValidation(district)
            }
            if(streetValue === ''){
                
                errorValidation(street, 'Preencha esse campo')
            } else {
               
                successValidation(street)
            }
            if(complementValue === ''){

                errorValidation(complement, 'Preencha esse campo')
            } else {
                successValidation(complement)
            }

        }
            function errorValidation(input, message){
                const formGroup = input.parentElement; // para pegar o elemento pai do input

                const small = formGroup.querySelector('small')

                small.innerText = message

                formGroup.className = 'form-group error'

            }

            function successValidation(input){
                const formGroup = input.parentElement;

                formGroup.className = 'form-group success'
            }
            

    }
    

    