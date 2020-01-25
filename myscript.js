//important variables
const container= document.getElementById("container");
let rows= document.getElementsByClassName("gridRow");
let cells= document.getElementsByClassName("cell");
const button= document.getElementById("reset");
const colorPicker= document.getElementById("colorChange");
const button2= document.getElementById("rainbow");
let colorMode= 'black';

//reset and resize button
button.addEventListener("click", clearAndResize);
//resets entire grid and resizes
function clearAndResize() {
    const input= prompt("Enter a new grid size, up to 100!");
    if(input== null||input== "") {
        return;
    }else if(input< 1 || input>100 || isNaN(input)) {
            alert("Invalid size, try again");
            clearAndResize();
    }else{
        while(container.firstChild) {
            container.removeChild(container.firstChild);
        }
        newRow(input);
        newColumn(input);
        cellSizing(input);
    };
};

//color buttons
colorPicker.addEventListener("click", colorFillChange);
//pulls up color Input and changes based on user input
function colorFillChange() {
    colorMode= "colorValue";
};

button2.addEventListener("click", colorFillRainbow);
//changes color Input to be random/rainbow
function colorFillRainbow() {
    colorMode= "random";
}

//hover-color in cell, default black
container.addEventListener("mouseover", fillCell);
//fill Function
function fillCell(e) {
    if(e.target.className=== "cell") {
        if(colorMode=== "random") {
            e.target.style.background= `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        }else if(colorMode=== "colorValue") {
            const colorValue= document.getElementById("colorChange").value;
            e.target.style.background= `${colorValue}`; 
        }else {
            e.target.style.background= "black"  
    };
};
};

//creates a default grid sized 16x16
grid();
function grid() {
    newRow(16);
    newColumn(16);
    cellSizing(16);
};

//functions to take (row, column)
//updates and creates rows within the container Div
function newRow(rowNum) {
    //loops and pushes rows till complete
    for(r= 0; r< rowNum; r++) {
        let row= document.createElement("div");
        container.appendChild(row).className= "gridRow";
    };
};

//update and creates columns
//loops to match rows first, then inputs cells
function newColumn(cellNum) {
    for(p= 0; p< rows.length; p++) {
        for(c= 0; c< cellNum; c++) {
            let newCell= document.createElement("div");
            rows[c].appendChild(newCell).className= "cell";  
        };        
    };
};

function cellSizing(size) {
    var x = rows;
    var y= cells;
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.height= (900/size) + "px";
    };
    for (i = 0; i < y.length; i++) {
      y[i].style.width= (900/size) + "px";
      y[i].style.height= (900/size) + "px";
    };
};



