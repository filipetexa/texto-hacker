function criaElementos() {
    const horizontal = Math.trunc(innerWidth/40) - 2;
    let div;
    let text;

    for (let i = 0; i < horizontal; i++) {
        div = document.createElement('div');
        text = document.createTextNode('teste');
        div.setAttribute('tx-hacker', 'tx-value');
        div.appendChild(text);
        div = document.body.appendChild(div);
        div.style.left = `${i * 40}px`
        let position = Math.random() * innerHeight;
        div.style.top = `${position}px`;
        trocaSimbolo(div, position);
    }

}

async function trocaSimbolo(palavra, position) {
    const simbolos = ['石室诗士施氏', '誓食十狮十狮', '施氏时视狮市', '室诗士施誓食'];
    for (let i = 0; i < simbolos.length; i++) {
        if (i == simbolos.length - 1) {
            if (position >= innerHeight) {
                palavra.innerHTML = await pegaSimbolo(simbolos[i]);
                position = 0;
                i = -1;
            } else {
                palavra.innerHTML = await pegaSimbolo(simbolos[i]);
                palavra.style.top = `${position}px`
                position += 10;
                i = -1;
            }
        } else {
            if (position >= innerHeight) {
                palavra.innerHTML = await pegaSimbolo(simbolos[i]);
                position = 0;
            } else {
                palavra.innerHTML = await pegaSimbolo(simbolos[i]);
                palavra.style.top = `${position}px`
                position += 10;
            }
        }
    }
}

function pegaSimbolo(element) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(element);
        }, 30)
    })
}
