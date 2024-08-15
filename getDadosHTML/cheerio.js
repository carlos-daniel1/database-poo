const cheerio = require('cheerio');

const html = `
<ul id="frutas">
    <li class="elemento1">Maça</li>
    <li class="elemento2">Uva</li>
    <li class="elemento3">Laranja</li>
</ul>`;

const procura = cheerio.load(html);
const conteudo = procura('#frutas .elemento2').text();

console.log(conteudo)


