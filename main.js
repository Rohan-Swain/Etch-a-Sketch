let mainDiv = document.getElementById("main");
let controlsDiv = document.getElementById('controls');

let colorArray = ['red', 'yellow', 'blue', 'aliceblue', 'aqua', 'aquamarine', 'antiquewhite', 'chocolate', 'cadetblue', 'cyan', 'coral'];

let write = 'black';
let erase = 'white';

let IS_WRITING = true;

//Adding a Slider to change the size of the grid
let slider = document.createElement('input');
let sliderUI = document.createElement('span');
sliderUI.setAttribute('id', 'sliderUI');
sliderUI.innerText = '8x8';

slider.type = 'range';

slider.min = 0;
slider.max = 3;
slider.value = 0;

slider.oninput = () => {
    let gridSize = 8 * Math.pow(2, slider.value);
    sliderUI.innerText = `${gridSize}x${gridSize}`;

    gridCreation(gridSize);
}

//Creating the Grid
function gridCreation(gridSize) {
    mainDiv.innerHTML = '';
    for(let i = 0; i < gridSize*gridSize; i++) {
        let smallDiv = document.createElement('div');
        smallDiv.setAttribute("class", "smallDiv");
        smallDiv.style.width = `${Math.floor(640/gridSize)}px`;
        smallDiv.style.height = `${Math.floor(640/gridSize)}px`;
        smallDiv.addEventListener('mouseover', () => {
                if(IS_WRITING) {
                    smallDiv.style.backgroundColor = write;
                } else {
                    smallDiv.style.backgroundColor = erase;
                }
            }
        );
        mainDiv.appendChild(smallDiv);
    }    
}

//Clearing the Grid
function clearGrid() {
    let smallDivs = document.querySelectorAll('.smallDiv');
    smallDivs.forEach(item => item.style.backgroundColor = erase);
}

//Controls
let eraseControl = document.createElement('button');
eraseControl.setAttribute('class', 'buttons active');
eraseControl.classList.toggle('active', false);
eraseControl.innerText = 'Erase';

let writeControl = document.createElement('button');
writeControl.setAttribute('class', 'buttons active');
writeControl.innerText = 'Write';

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

let clearControl = document.createElement('button');

clearControl.setAttribute('class', 'buttons');
clearControl.innerText = 'Clear';

clearControl.addEventListener('mousedown', () => {
    clearGrid();
    IS_WRITING = true;
    eraseControl.classList.toggle('active', false);
    writeControl.classList.toggle('active', true);
})

controlsDiv.appendChild(writeControl);
controlsDiv.appendChild(eraseControl);
controlsDiv.appendChild(clearControl);
controlsDiv.appendChild(sliderUI);
controlsDiv.appendChild(slider);


//Calling the Gridcreation function to show a sketchpad for the very first time it loads
gridCreation(8);