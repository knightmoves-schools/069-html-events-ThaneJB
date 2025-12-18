function calculateSquare(){
    let value = document.getElementById('number').value;
    let result = document.getElementById('result');

    //add code here
     

     if (!isNaN(value)) {
        result.innerHTML = value * value;
     } else {
        result.innerHTML = "Invalid, please enter a number";
     }
    
}

document.getElementById('result').innerHTML = 1;