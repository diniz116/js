function ex9(){
    let baseMaior = Number(document.getElementById("baseM").value);
    let baseMenor = Number(document.getElementById("baseMnr").value);
    let altura = Number(document.getElementById("altura").value);

    const calc = ((baseMaior + baseMenor) * altura) / 2; 

    alert("Área do Trapézio = " + calc.toFixed(2));
}