"use strict"

let navigate = (start, end) => {
    const map = document.querySelectorAll(".square"); //same is made in script file
let n=50
let startRow = Math.floor(start/n);
let endRow = Math.floor(end/n);
let startColl = Math.floor(start%n);
let endColl = Math.floor(end%n);
let coll = endColl-startColl;
let row = startRow-endRow;
    
    document.getElementById("result").innerHTML =
    `GPS: ${start}/${end}
    horizontal: ${coll}
    vertical: ${row}`; //Note! innerHTML makse all file parse again
    

}
