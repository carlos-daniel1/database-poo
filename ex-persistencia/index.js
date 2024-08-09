import fs from 'fs'

import { createObjectCsvWriter as csvWriter } from 'csv-writer'

import csvParser from 'csv-parser'

const questoes = [
    { numQuestao: 1, desc: 'Questao de Python' },
    { numQuestao: 2, desc: 'Questao de Java' },
    { numQuestao: 3, desc: 'Questao de C#' }
]


const writer = csvWriter({
    path: 'questoes.csv',
    header: [
        {id: 'numQuestao', title: 'numQuestao'},
        {id: 'desc', title: 'desc'}
    ]
})

questoes.sort(() => Math.random() - 0.7);


writer.writeRecords(questoes)
.then(() => {
    console.log(`Arquivo questoes.csv criado com sucesso!`);
})

const alunos = [
    { nome: 'Jose'},
    { nome: 'Pedro'},
    { nome: 'Alfredo'}
]

const writeAlunos = csvWriter({
    path: 'alunos.csv',
    header: [
        {id: 'nome', title: 'Nome'}
    ]
})


writeAlunos.writeRecords(alunos)
.then(() => {
    console.log('Arquivo alunos.csv criado com sucesso!');
})


const listaAlunos = [];

const listaQuestoes = []

fs.createReadStream("alunos.csv")
.pipe(csvParser())
.on("data", (data) => {
    listaAlunos.push(data);
})

fs.createReadStream("questoes.csv")
.pipe(csvParser())
.on("data", (data) => {
    listaQuestoes.push(data)
})
.on("end", () => {
    let contador = 0
    listaAlunos.map((a) => {
        a.questao = listaQuestoes[contador].numQuestao
        a.desc = listaQuestoes[contador].desc
        contador++;
    })
})
.on("end", () => {
    const atribuir = csvWriter({
        path: 'arquivo.txt',
        header: [
            {id: 'Nome', title: 'Nome do Aluno'},
            {id: 'questao', title: 'questao'},
            {id: 'desc', title: 'desc'}
        ]
    })
    
    atribuir.writeRecords(listaAlunos)
    .then(() => {
        console.log('arquivo.txt criado com sucesso!');
    })
})


// fs.readFile('questoes.csv', 'utf8', function(err, data){
//     fs.appendFile('alunos.csv', data, (err) => {});
// });



// fs.writeFile('arquivo.txt', '', () => {
//     console.log('arquivo.txt criado com sucesso');
// })
