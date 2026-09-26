export default function API(cep){
    const url = `https://viacep.com.br/ws/${cep}/json/`
    return fetch(url)

    .then(resposta => resposta.json())
    
} 