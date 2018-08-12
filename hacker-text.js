const symbols = ['石室诗士施氏', '誓食十狮十狮', '施氏时视狮市', '室诗士施誓食'];
let position = 0;

function createSomething(){
    let div = document.createElement('div');
    const text = document.createTextNode('TESTE');
    div.setAttribute('tx-hacker','tx-value');
    div.appendChild(text);  
    
    document.body.appendChild(div);

}


async function startSymbols() {
    let elements = document.querySelectorAll('[tx-hacker]');
    for (let i = 0; i < symbols.length; i++) {
        if (i == symbols.length - 1) {
            if (position >= innerHeight) {
                position = 0
            } else {

                elements.innerHTML = await getSymbol(symbols[i]);
                elements.style.top = `${position}px`
                position += 1
                i = -1;
            }
        } else {
            if (position >= innerHeight) {
                position = 0
            } else {

                elements.style.top = `${position}px`;
                position += 30;
                elements.innerHTML = await getSymbol(symbols[i]);
            }
        }
    }
}

const getSymbol = function (element) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(element);
        }, 30)
    })
}