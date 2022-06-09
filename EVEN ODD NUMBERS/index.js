// Even or Add

function isEven(num){
    return num % 2 === 0 ? 'even' : 'odd'; 
}
var input = prompt();
var result = isEven(input);

document.write(result);