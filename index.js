function calculateSquare(){
    let value = document.getElementById('number').value;
    let result = document.getElementById('result');

    //add code here
     let num = value;

     if (!isNaN(num)) {
        result.innerHTML = num * num;
     } else {
        result.innerHTML = "Invalid, please enter a number";
     }
    
}
