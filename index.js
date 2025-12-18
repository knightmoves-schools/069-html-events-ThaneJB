function calculateSquare(){
    let value = document.getElementById('number').value;
    let result = document.getElementById('result');

    //add code here
     let num = Number(value);

     if (!isNaN(num)) {
        result.textContent = num * num;
     } else {
        result.textContent = "Invalid, please enter a number";
     }
    
}
