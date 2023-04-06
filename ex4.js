function ex4(){
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);

    const calc = ((nota1* 2) + (nota2 * 3)) / 5;

    alert("Média = " + calc.toFixed(2));
}