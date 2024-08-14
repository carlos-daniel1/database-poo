const fs = require('fs');
const csv = require('csv-parser');

const csvDados = `id,nome,email
1,Joao,joao@gmail.com
2,Alfredo,alfredo@gmail.com
3,Godofredo,godofredo@gmail.com`;

fs.writeFileSync('dados.csv', csvDados);
console.log('Arquivo criado com sucesso');

fs.createReadStream('dados.csv')
.pipe(csv())
.on('data', (row) => {
    console.log(`ID: ${row.id}, Nome: ${row.nome}, Email: ${row.email}`)
})
.on('end', () => {
    console.log('Csv processado')
});
