export function exibirResultado(dados){
    let cardEndereço = document.getElementById('resultado-endereco')

    cardEndereço.innerHTML = `${dados.logradouro}, ${dados.bairro}, ${dados.localidade}, ${dados.uf}`
}

export function exibirHistorico(historico){
    let itensJS = document.getElementById('itensJS')

    itensJS.innerHTML = ''

    for(let i = 0; i < historico.length; i++){
        let cardItens = document.createElement('div')
        cardItens.dataset.cep = historico[i].cep
        
        let botaoRemover = document.createElement('button')

        cardItens.classList.add('itens-historico')
        botaoRemover.classList.add('btn-remover')

        cardItens.innerHTML = `${historico[i].cep}`
        botaoRemover.innerHTML = 'Remover'

        cardItens.appendChild(botaoRemover)
        itensJS.appendChild(cardItens)
    }
}

export function limparResultado(){
    let cardResultado = document.getElementById("resultado-endereco")

    cardResultado.innerHTML = ''
}