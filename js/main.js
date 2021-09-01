
function getData() {
    let inputs = document.querySelectorAll(".getIn");
    let data = {};
    let name = {};
    for (let k = 0; k < inputs.length; k++) {
        data[k] = inputs[k].value;
   
    }
    console.log(data);  
}




