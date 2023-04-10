function ex3(){
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    if(n1 > n2)
        alert("Número menor = " + n2);
    else
        alert("Número menor = " + n1);
}