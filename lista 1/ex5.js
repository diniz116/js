function ex5(){
    let valor = Number(document.getElementById("valor").value);

    const calc = valor - (valor * 0.10);

    alert("Valor: " + calc.toFixed(2));
}