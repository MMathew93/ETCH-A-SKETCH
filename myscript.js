//important variables
const container= document.getElementById("container");
let rows= document.getElementsByClassName("gridRow");
let cells= document.getElementsByClassName("cell");
const button= document.getElementById("reset");

//reset and resize button
button.addEventListener("click", clearAndResize);

grid();
//creates a default grid sized 16x16
function grid() {
    newRow(16);
    newColumn(16);
}


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

//hover-color in cell
container.addEventListener("mouseover", fillCell);
//cells.addEventListener("click", stopFillCell);
//container.addEventListener("click", stopFill);

//fill Function
function fillCell(e) {
    if(e.target.className=== "cell") {
        e.target.style.background= "black";
    }
}

//stopFill function
//function stopFill(e) {}

//resets entire grid and resizes
function clearAndResize() {
    const input= prompt("Enter a new grid size, up to 100!");
    if(input< 1 || input>100) {
        return;    
    }else{ 
        while(container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
    newRow(input);
    newColumn(input);
};

