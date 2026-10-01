export default function API(cep){ // função responsavel pela API do sistema
    const url = `https://viacep.com.br/ws/${cep}/json/`
    return fetch(url)

    .then(resposta => resposta.json())
    
} 