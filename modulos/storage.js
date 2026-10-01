export function salvar(cep, dados){ // função responsavel por salvar o numero do CEP e os dados dele
    let historico = JSON.parse(localStorage.getItem('historico')) || [] /* essa variavel transforma os dados do historico em objetos,
    caso tenha algum historico anterior, ou cria um array*/
    
    historico.push({cep, dados}) // adiciona os dados ao array

   localStorage.setItem('historico', JSON.stringify(historico)) // salva o historico final
}

export function buscar(){ // função responsavel por buscar os dados
    let historico =  localStorage.getItem('historico')

    if(historico != null){ // se o historico não tiver vazio, retorna ele
        
        return JSON.parse(historico)
    
    } else{ // caso esteja vazio, retorna um array vazio
        return [] 
    }
}

export function remover(cep){ // função responsavel por remover os CEPs selecionados
    let historico = localStorage.getItem('historico')

    let historicoAtual = JSON.parse(historico) || []

    let historicoFiltrado = historicoAtual.filter(item => item.cep !== cep)

    localStorage.setItem('historico', JSON.stringify(historicoFiltrado))
}