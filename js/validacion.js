const name = document.getElementById("name")
const date = document.getElementById("date")
const street = document.getElementById("street")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings=""
    let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let regexDate=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
    let regexPhone=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    parrafo.innerHTML=""
    if(name.value.length <6){
        warnings+='El nombre no es válido <br>'
        entrar=true
    }
    if(regexDate.test(date.value)){
        warnings+='La fecha no es válida <br/>'
        entrar=true
    }
    if(street.value.length <15){
        warnings+='La dirección no es válda'
        entrar=true
    }
    if(regexEmail.test(email.value)){
        warnings+='El email no es válido <br>'
        entrar=true
    }
    if(regexPhone.test(phone.value)){
        warnings+='El teléfono no es válido <br>'
        entrar=true
    }
    if(entrar){
        parrafo.innerHTML=warnings
    }else{
        parrafo.innerHTML="Enviado"
    }
})