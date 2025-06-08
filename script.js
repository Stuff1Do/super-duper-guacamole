const input = document.querySelector('.customize');
const divContainer = document.querySelector('.div-container');
const resetButton = document.querySelector('.reset');

let gridSize = 0;
let divs=[];
input.addEventListener('click', ()=>{
    gridSize = prompt('Input grid size: (1 - 100):');
    if(gridSize < 1 || gridSize > 100 || !gridSize){
        gridSize = 0;
        alert('Invalid Input. Try again!');
        return;
    }
    clearCanvas();
    createGrid(gridSize);
})

resetButton.addEventListener('click', ()=>{
    gridSize = 0;
    clearCanvas();
})

function clearCanvas(){
    divs.forEach((div)=>{
        div.remove();
    })
}

function colorRandomizer(div){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256); 
    const blue = Math.floor(Math.random() * 256);
    if(div.style.backgroundColor){
        return;
    }
    div.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

function setOpacity(div){
    let opacityFactor = 0.03;
    let opacity = parseFloat(div.style.opacity);
    if(div.style.opacity < 1){
        opacity += opacityFactor
        div.style.opacity = opacity;
        
    }else {
        return;
    }
            
}
function createGrid(gridSize){
    let totalSize = gridSize * gridSize;
    let calculateGridBasis = (gridSize) => `${100 / gridSize}%`;
    for(let i = 1; i <= totalSize; i++){
        const div = document.createElement('div');
        div.classList.add(`div-${i}`);
        divs.push(div);
        div.style.flexGrow = '1';
        div.style.flexBasis = calculateGridBasis(gridSize);
        divContainer.appendChild(div);
        
    }
      
    divs.forEach((div)=>{
        div.style.opacity = 0; 
        div.addEventListener('mousemove', ()=>{
            setOpacity(div);
            colorRandomizer(div);
            
        })
    })
}



