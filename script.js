const botao = document.querySelector('#botao')
var estado = document.querySelector('#estado')
var cidade = document.querySelector('#cid')
var logr = document.querySelector('#log')
const url = "https://viacep.com.br/ws/"
var retornou = false;
const backBtn = document.querySelector('#back')

backBtn.addEventListener('click', function esconder(){
    location.reload();
})

botao.addEventListener('click',function infoCep(){
    if(cidade.value.length >= 3 && logr.value.length >= 3 && estado.value != ""){
        fetch(`${url}${estado.value}/${cidade.value}/${logr.value}/json`)
    .then((response =>{
        return response.json()
        
    }))
    .then((data =>{
        document.querySelector('#logo').style.display = "none"
        document.querySelector('#resultado').style.display = "flex";
        document.querySelector('.pesquisa').style.display = "none"
        document.querySelector('#geral').style.display = "none"

        for(i = 0; i < data.length; i++){
            
            
            var div = document.createElement("div")
            
            div.setAttribute("id", "caixa")

            //CEP
            

            let pCep = document.createElement("p")
            let nodeCEP = document.createTextNode(`CEP: ${data[i].cep}`)
            pCep.appendChild(nodeCEP)
            div.appendChild(pCep)

            //LOGRADOURO

            let pLog = document.createElement("p")
            let nodeLog = document.createTextNode(`Logradouro: ${data[i].logradouro}`)
            pLog.appendChild(nodeLog)
            div.appendChild(pLog)

            //BAIRRO

            let pBai = document.createElement("p")
            let nodeBai = document.createTextNode(`Bairro: ${data[i].bairro}`)
            pBai.appendChild(nodeBai)
            div.appendChild(pBai)

            //LOCALIDADE

            let pLoc = document.createElement("p")
            let nodeLoc = document.createTextNode(`Localidade: ${data[i].localidade}`)
            pLoc.appendChild(nodeLoc)
            div.appendChild(pLoc)

            //UF

            let pUF = document.createElement("p")
            let nodeUF = document.createTextNode(`UF: ${data[i].uf}`)
            pUF.appendChild(nodeUF)
            div.appendChild(pUF)

             //CRIAR ELEMENTOS

            document.getElementById('resultado').appendChild(div)
        }

        if(data.length != 0){
            retornou = true;
            backBtn.style.display = "inline"
        }
        else{
            retornou = false;
            document.querySelector('#semRetorno').style.display = "flex"
            document.querySelector('#resultado').style.display = "none";
            document.querySelector('#geral').style.display = "none";
            backBtn.style.display = "inline"
        }
    }))
    .catch((error =>{
        console.log(error)
    }))
    }

    else{
        alert('Verifique a integridade dos dados.')
    }
    
    
})




