function criaElementos() {
    let div;
    let text;

    for (let i = 0; i < 100; i++) {
        div = document.createElement('div');
        text = document.createTextNode('teste');
        div.setAttribute('tx-hacker', 'tx-value');
        div.appendChild(text);
        div = document.body.appendChild(div);
        div.style.left = `${i * 40}px`
        div.style.top = `${Math.random()*innerHeight}px`
    }
}

function getPosition() {
    let elements = document.querySelectorAll('[tx-hacker]');
    const aux = []
    let position;   
    for (let i = 0; i < elements.length; i++) {
        position = elements[i].style.top
        aux.push(position)
    }
    console.log(aux)
    return aux
}