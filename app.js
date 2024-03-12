

const display = document.getElementById("display");


function apentToDisplay(input){
    display.value += input;
}


function clearDisplay(input){
    display.value = input;

}

function calculate(){

    try{
        display.value = eval(display.value)
    }
    catch (error){
        display.value = "Error"
    }



}