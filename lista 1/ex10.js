function ex10(){
    let lado = Number(document.getElementById("lado").value);

    const calc = lado * lado;

    alert("Área do Quadrado = " + calc.toFixed(2));
}