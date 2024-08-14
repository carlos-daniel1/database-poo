const fs = require('fs');
const { stringify } = require('querystring');

const jsonDados = [{
    "id": 1, "nome": "Garrafa", "detalhes": {
        "cor": "cinza", "marca": "stanley"
    }
     
    }, 
    {
    "id": 2, "nome": "Mochila", "detalhes": {
            "cor": "preto", "marca": "nike"
    }
}]

fs.writeFileSync('produtos.json', JSON.stringify(jsonDados, null, 2))
console.log('Arquivo produtos.json criados com sucesso')

fs.readFile('produtos.json', 'utf8', (err, data) => {
    if(err) throw err;
    const produtos = JSON.parse(data);

    produtos.forEach(produto => {
        console.log(`ID: ${produto.id}, Nome: ${produto.nome}`)
        if(produto.detalhes) {
            console.log(`Detalhes: ${produto.detalhes.cor}`)
        }
    });
})
