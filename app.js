// Display selection 
let display = document.querySelector('#screen p');

// Click handler 
const calcNumber = document.querySelector('.number-div');
calcNumber.addEventListener('click', function(event){
    if(event.target.innerText == '='){
        (function(){
            display.innerText = eval(display.innerText);
           })()
    }
    if(event.target.innerText != '='){
        display.innerText += event.target.innerText;
    }
});

// clear handler 
document.getElementById('clear').addEventListener('click', function(){
    display.innerText = '0';
})







