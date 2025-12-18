function calculateSquare(){
    let value = document.getElementById('number').value;
    let result = document.getElementById('result');

    //add code here
     

     if (!isNaN(value)) {
        document.getElementById('result').innerHTML = value * value;
     } else {
        document.getElementById('result').innerHTML = "Invalid, please enter a number";
     }
    
}

document.getElementById('result').innerHTML = 1;