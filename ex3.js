function ex3(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    const calc = num1 / num2;

    if(num2 == 0){
        alert("Numero 2 não pode ser 0");
    } else{
        alert(num1 + " / " + num2 + " = " + calc.toFixed(2));
    }
}