import API from "../modulos/api.js" // importando funções do arquivo API
import{ salvar, buscar, remover } from "../modulos/storage.js" // importando funções do arquivo storage
import { exibirResultado, exibirHistorico, limparResultado } from "../modulos/ui.js" // importando funções do arquivo ui

let botaoBuscar = document.getElementById('btn-buscarCEP')
let input = document.getElementById('icaixa_texto')

let historico = buscar() // variavel historico recebe a função buscar 

exibirHistorico(historico) // a função exibe o historico, caso tenha algo guardado anteriormente

botaoBuscar.addEventListener('click', function(){ // função aplicada ao botao buscar
    let inputValor = input.value // valor da caixa de texto
    const regex = /[0-9]{8}/ // determina o que pode ser aplicada na caixa de texto

    if(!regex.test(inputValor)){ // caso o valor da caixa de texto seja algo que não se aplique a regra, aparece o alert e retorna ao começo
        alert("DIGITE EXATAMENTE 8 DIGITOS")

        return 0 
    }

    API(inputValor) // caso passe, o valor será buscado na função API

    .then(dados =>{ // na busca...
        if(dados.erro === 'true'){ // se o valor da resposta de dados.erro for verdadeiro, aparecera o alert, informando que o CEP não foi encontrado
            alert('CEP NÃO ENCONTRADO')
            
            return 0
        }
        exibirResultado(dados) // se existir dados, fica da responsabilidade da função exibirResultados mostra-los
        salvar(inputValor, dados) // com isso, essa função salva o valor da caixa de texto e salva os dados daquele CEP
        exibirHistorico(buscar()) // aqui é exibido o historico atual
    })
})

let divItens = document.getElementById('itensJS')

divItens.addEventListener("click", function(event){ // função que remove o CEP que for selecionado do historico
    if(event.target.classList.contains('btn-remover')){ 
        let CEP = event.target.parentElement.dataset.cep

        remover(CEP)

        exibirHistorico(buscar())
    }
})

