const display = document.getElementById('display');

function append(val) {
    if (display.value === "Error")
        clearDisplay();
    display.value += val;
}

function clearDisplay() {
    display.value = '';
}


function deleteChar() {
    display.value = display.value.slice(0, -1);
}


function calculate() {
    try {
        display.value = Function('"use strict";return (' + display.value + ')')();
    } catch (err) {

        display.value = "Error";
    }
}

function createParticle() {
    const symbols = ['+', '-', '×', '÷', '=', '√', 'π', '7', '8', '0'];
    const particle = document.createElement('div');
    particle.classList.add('math-symbol');

    particle.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.fontSize = (Math.random() * 20 + 10) + 'px';
    particle.style.animationDuration = (Math.random() * 5 + 7) + 's';

    document.getElementById('bg-animation').appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 10000);
}

setInterval(createParticle, 400);





