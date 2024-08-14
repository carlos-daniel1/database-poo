const fs = require('fs');

const logDados = `
INFO - arquivo nao salvo
ERROR - codigo errado
DEBUG - codigo muito estranho`

fs.writeFileSync('log.txt', logDados.trim())
console.log('Arquivo log.txt criado!')

fs.readFile('log.txt', 'utf-8', (err, data) => {
    if(err) throw err;

    const log = data.trim().split('\n');

    log.forEach(e => {
        const f = /^(\w+) - (.*)$/;

        const confirmar = e.match(f);

        if(confirmar) {
            const [nivel, mensagem] = confirmar
            console.log(`Nível: ${nivel} \nMensagem: ${mensagem}`)
        }
    })
});