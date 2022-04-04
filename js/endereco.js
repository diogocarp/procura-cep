
const cep = document.getElementById("cep") 
cep.addEventListener("focusout", (e) => {

    let Cep = document.getElementById("cep").value;
    console.log(Cep)

    let busca = cep.value.replace("-","")
    fetch(`https://viacep.com.br/ws/${busca}/json/`, options).then((response) => {

        response.json().then(dados => {

            document.getElementById("bairro").value = dados.bairro;
            document.getElementById("ddd").value = dados.ddd;
            document.getElementById("ibge").value = dados.ibge;
            document.getElementById("localidade").value = dados.localidade;
            document.getElementById("logradouro").value = dados.logradouro;
            document.getElementById("uf").value = dados.uf;
            
        })
    })
})

const options = {
    method: "GET", 
}

