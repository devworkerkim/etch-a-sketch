const container = document.querySelector('#container');
const clearBtn = document.querySelector('#clear');
const gridSize = document.querySelector('#gridSize');
const heading = document.querySelector('h1');
const colorRadios = document.querySelectorAll('input[name="color"]');
var colorSelect = 'gray';

colorRadios.forEach(function (radio) {
    radio.addEventListener('change', function() {
        colorSelect = radio.value;
    });
});

clearBtn.addEventListener('click', function() {
    let sideLength = prompt('Side length? (Integer between 1 and 100)');
    if (sideLength === null) return;
    sideLength = Number.parseInt(sideLength);
    while (Number.isNaN(sideLength) || sideLength > 100 || sideLength <= 0) {
        sideLength = prompt('Side length? (Integer between 1 and 100)');
        if (sideLength === null) return;
        sideLength = Number.parseInt(sideLength);
    }
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    setupGrid(sideLength);
});

function setupGrid(num) {
    gridSize.innerText = ` Grid Size: ${num} x ${num}`;
    container.style.gridTemplateColumns = `repeat(${num}, auto)`;
    container.style.gridTemplateRows = `repeat(${num}, auto)`;
    let divHeight = ((window.innerHeight - heading.offsetHeight - clearBtn.offsetHeight) / num) + 'px';
    for (let i = 0; i < (num * num); i++) {
        const div = document.createElement('div');
        div.style.height = divHeight;
        container.appendChild(div);
    }
    container.querySelectorAll('div').forEach(function(element) {
        element.addEventListener('mouseover', function() {
            switch (colorSelect) {
                case 'gray':
                    element.style.backgroundColor = 'gray';
                    element.style.opacity = 1;
                    break;
                case 'random':
                    element.style.backgroundColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`
                    break;
                case 'shade':
                    console.log(element.style.backgroundColor);
                    if (element.style.backgroundColor !== 'black') {
                        element.style.backgroundColor = 'black';
                        element.style.opacity = .2;
                    }
                    else {
                        element.style.opacity = Number.parseFloat(element.style.opacity) + .2;
                    }
                    break;
                default:
                    element.style.backgroundColor = 'black';
                    element.style.opacity = 1;
            }
        })
    });
}

setupGrid(16);