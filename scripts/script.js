import API from "../modulos/api.js"
import{ salvar, buscar, remover } from "../modulos/storage.js"
import { exibirResultado, exibirHistorico, limparResultado } from "../modulos/ui.js"

let botaoBuscar = document.getElementById('btn-buscarCEP')
let input = document.getElementById('icaixa_texto')

let historico = buscar()

exibirHistorico(historico)

botaoBuscar.addEventListener('click', function(){
    let inputValor = input.value
    const regex = /[0-9]{8}/

    if(!regex.test(inputValor)){
        alert("DIGITE EXATAMENTE 8 DIGITOS")

        return 0 
    }

    API(inputValor)

    .then(dados =>{
        if(dados.erro === 'true'){
            alert('CEP NÃO ENCONTRADO')
            
            return 0
        }
        exibirResultado(dados)
        salvar(inputValor, dados)
        exibirHistorico(buscar())
    })
})

let divItens = document.getElementById('itensJS')

divItens.addEventListener("click", function(event){
    if(event.target.classList.contains('btn-remover')){
        let CEP = event.target.parentElement.dataset.cep

        remover(CEP)

        exibirHistorico(buscar())
    }
})

