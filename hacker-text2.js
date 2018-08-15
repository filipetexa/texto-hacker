
function criaElementos() {
    const horizontal = Math.trunc(innerWidth / 40)- 3;
    let div;
    let text;
    let position; 

    let botao = document.getElementById('botao')
    botao.style.display = "none"

    for (let i = 0; i < horizontal; i++) {
        div = document.createElement('div');
        text = document.createTextNode('teste');
        div.setAttribute('tx-hacker', 'tx-value');
        div.appendChild(text);
        div = document.body.appendChild(div);
        div.style.left = `${i * 40 - 150}px`
        position = Math.random() * innerHeight;
        div.style.top = `${position}px`;
        trocaSimbolo(div, position);
    }

}

async function trocaSimbolo(palavra, position) {
    const simbolos = [  'こんにちは、私は悟空です。',
                        '私の名前はフィリップです。',
                        ' 私はマランドゥーロ才で' ]



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
