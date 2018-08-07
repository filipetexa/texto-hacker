const symbols = ['石室诗士施氏', '誓食十狮十狮', '施氏时视狮市', '室诗士施誓食'];
let element = document.querySelectorAll('[tx-hacker]')[0];
let position = 0;


async function startSymbols() {
    for (let i = 0; i < symbols.length; i++) {
        if (i == symbols.length - 1) {
            if (position >= innerHeight) {
                position = 0
            } else {

                element.innerHTML = await getSymbol(symbols[i]);
                element.style.top = `${position}px`
                position += 5
                i = -1;
            }
        } else {
            if (position >= innerHeight) {
                position = 0
            } else {

                element.style.top = `${position}px`;
                position += 30;
                element.innerHTML = await getSymbol(symbols[i]);
            }
        }
    }
}

const getSymbol = function (element) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(element);
        }, 150)
    })
}