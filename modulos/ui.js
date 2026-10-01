export function exibirResultado(dados){ // função responsavel por exibir os dados do CEP
    let cardEndereço = document.getElementById('resultado-endereco')

    cardEndereço.innerHTML = `${dados.logradouro}, ${dados.bairro}, ${dados.localidade}, ${dados.uf}`
}

export function exibirHistorico(historico){ // função responsavel por mostrar o historico
    let itensJS = document.getElementById('itensJS')

    itensJS.innerHTML = '' // inicia vazio

    for(let i = 0; i < historico.length; i++){
        let cardItens = document.createElement('div')
        cardItens.dataset.cep = historico[i].cep // aqui diz que o card recebe somente o numero do CEP
        
        let botaoRemover = document.createElement('button')

        cardItens.classList.add('itens-historico')
        botaoRemover.classList.add('btn-remover')

        cardItens.innerHTML = `${historico[i].cep}` // responsavel pela visualização dos CEPs no historico
        botaoRemover.innerHTML = 'Remover'

        cardItens.appendChild(botaoRemover) // botao remover
        itensJS.appendChild(cardItens)
    }
}

export function limparResultado(){ // função responsavel por limpar os resultados
    let cardResultado = document.getElementById("resultado-endereco")

    cardResultado.innerHTML = ''
}