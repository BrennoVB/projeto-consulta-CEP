export function salvar(cep, dados){
    let historico = JSON.parse(localStorage.getItem('historico')) || []
    
    historico.push({cep, dados})

   localStorage.setItem('historico', JSON.stringify(historico))
}

export function buscar(){
    let historico =  localStorage.getItem('historico')

    if(historico != null){
        
        return JSON.parse(historico)
    
    } else{
        return []
    }
}

export function remover(cep){
    let historico = localStorage.getItem('historico')

    let historicoAtual = JSON.parse(historico) || []

    let historicoFiltrado = historicoAtual.filter(item => item.cep !== cep)

    localStorage.setItem('historico', JSON.stringify(historicoFiltrado))
}