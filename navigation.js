"use strict"

let navigate = (start, end) => {
    const map = document.querySelectorAll(".square"); //same is made in script file
let n=50
let startRow = start/n;
let endRow = end/n;
let coll = endRow-end/n;
let row = startRow-endRow;
//    0000-0049
//    0050-0099
//    0100-0149
//    ...            50x50 n*n
//    2450-2499 
    
    document.getElementById("result").innerHTML =
    `GPS: ${start}/${end}
    start row: ${startRow}
    end row: ${endRow}
    horizontal: ${coll}
    vertical: ${row}`; //Note! innerHTML makse all file parse again
    

}
