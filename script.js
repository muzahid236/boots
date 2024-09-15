//Calculator proggram

let display = document.querySelector('#display');

function appendtoDisplay(input){
display.value += input;
}

function clearDisplay(){
 display.value = "";
}

function multipy(){
    try{
        display.value =eval(display.value);
    }
    catch(Error){
   display.value ="Error";
    }

    
}