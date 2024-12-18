async function buscarDadosApi(){
    let api = await fetch('http://localhost:3000/coffee')
    let dados = api.json();
    return dados;
    
    }
    