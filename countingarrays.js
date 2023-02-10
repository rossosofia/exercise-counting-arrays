"use strict"
console.log("hello world");

// use one let, one const and one function

// 1 make a program that counts with a timed delay
// 2 mdify the program to insert the counter-value in the baginning of the array
// 3 modify the program again to make sure tha array doesn't get onger than nine item

let counter = 0;
const array = [];

initLoop();

function initLoop() {
    console.log("initLoop");
    loop();
}

function loop(){
    // console.log(counter);
    counter++; 
    setTimeout(loop, 1000);
    array.unshift(counter);
    if(array.length > 9){
        array.pop();
    }
    console.log(array);
}



