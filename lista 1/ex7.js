function ex7(){
    let peso = Number(document.getElementById("peso").value);

    const pesoM = peso + (peso * 0.15); //PesoM = Peso More

    const pesoL = peso - (peso * 0.20); //PesoL = Peso Less

    alert("Peso (+15%) = " + pesoM.toFixed(2) + "\nPeso (-20%) = " + pesoL.toFixed(2));
}