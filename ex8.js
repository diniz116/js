function ex8(){
    let peso = Number(document.getElementById("peso").value);

    const calc = peso * 1000

    alert("Peso (KG) = " + peso.toFixed(2) + "\nPeso (Gramas) = " + calc.toFixed(2));
}