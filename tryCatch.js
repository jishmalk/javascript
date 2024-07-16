console.log('started');

const a = getVal1();
const b = getVal2();

const result = processValues(a, b); 
console.log(result);
console.log('ended')


function getVal1() {
    return 12;
}

function getVal2(){
    return 22;
}

function processValues(a, b) {
    return a + b;
}