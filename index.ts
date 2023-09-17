var prompt = require('prompt-sync')();

let n1= parseInt(prompt(`please enter first number`))
let n2= parseInt(prompt(`please enter second number`))
let operator = prompt(`please enter your operator (+, -, *, /):`)

if( operator== '+'){
    console.log(`the answer is ${n1} ${operator} ${n2} = ${n1+n2}`);
    
}
else if(operator == '-'){
    console.log(`the answer is ${n1} ${operator} ${n2} = ${n1-n2}`);
    
}
else if(operator == '*'){
    console.log(`the answer is ${n1} ${operator} ${n2} = ${n1*n2}`);
    
}
else if(operator == '/'){
    console.log(`the answer is ${n1} ${operator} ${n2} = ${n1/n2}`);
    
}
else{
    console.log(`invalid operator try again`);
    
}

export{};



