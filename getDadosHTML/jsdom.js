const {JSDOM} = require('jsdom');

const html = `
<html>

<body>
    <p>Testando jsdom</p>
    <p>Testando jsdom2</p>
</body>

</html>
`;

const dom = new JSDOM(html);

const p = dom.window.document.querySelectorAll("p");

p.forEach(element => {
   console.log(element.textContent);
});

