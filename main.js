let mainDiv = document.getElementById("main");
let controlsDiv = document.getElementById('controls');

let write = 'black';
let erase = 'white';

let IS_WRITING = true;

let gridSize = 8;

//Grid Creation
for(let i = 0; i < gridSize*gridSize; i++) {
    let smallDiv = document.createElement('div');
    smallDiv.setAttribute("class", "smallDiv");
    smallDiv.style.width = `${Math.floor(640/gridSize)}px`;
    smallDiv.style.height = `${Math.floor(640/gridSize)}px`;
    smallDiv.addEventListener('mouseover', () => {
            if(IS_WRITING) {
                smallDiv.style.backgroundColor = `${write}`;
            } else {
                smallDiv.style.backgroundColor = `${erase}`;
            }
        }
    );
    mainDiv.appendChild(smallDiv);
}

//Controls
let eraseControl = document.createElement('button');
eraseControl.setAttribute('class', 'buttons active');
eraseControl.classList.toggle('active', false);
eraseControl.innerText = 'Erase';

let writeControl = document.createElement('button');
writeControl.setAttribute('class', 'buttons active');
writeControl.innerText = 'write';

writeControl.addEventListener('mousedown', () => {
    IS_WRITING = true;
    eraseControl.classList.toggle('active', false);
    writeControl.classList.toggle('active', true);
})

eraseControl.addEventListener('mousedown', () => {
    IS_WRITING = false;
    eraseControl.classList.toggle('active', true);
    writeControl.classList.toggle('active', false);
})

controlsDiv.appendChild(writeControl);
controlsDiv.appendChild(eraseControl);