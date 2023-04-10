function ex2(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);

    const calc = num1 * num2 * num3;

    alert(num1 + " X " + num2 + " X " + num3 + " = " + calc.toFixed(2));
}