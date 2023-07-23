"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 2048,
    color: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log("Test");
    }
};

console.log(options.name);

options.makeTest();

 console.log(options); 
let counter = 0;
for (let key in options) {
    if(typeof(options[key]) === 'object'){
        for(let i in options[key]) {
            console.log(`Свойства ${i} имеет значенние ${options[key][i]}`);
        } 
    } else {
        console.log(`${key}: ${options[key]}`);
        counter++;
    }
    
}


// console.log(Object.keys(options));
// console.log(Object.keys(options).length);