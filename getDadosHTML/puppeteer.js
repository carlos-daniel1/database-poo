const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const pagina = await browser.newPage();
    await pagina.goto('https://educacao.uol.com.br/noticias/2024/08/15/nordeste-tem-unicas-escolas-com-nota-10-em-anos-iniciais-do-pais-diz-ideb.htm')
    const conteudo = await pagina.$eval('div', e => e.textContent)
    console.log(conteudo)

    await browser.close();
})();