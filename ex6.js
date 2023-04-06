function ex6(){
    let salario = Number(document.getElementById("salario").value);
    let vendas = Number(document.getElementById("vendas").value);

    const comis = vendas * 0.04;

    const calc = salario + comis;

    alert("Comissão = " + comis.toFixed(2) + "\nSalário = " + calc.toFixed(2));
}