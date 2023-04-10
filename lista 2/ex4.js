function ex4(){
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);

    if(n1 < n2 && n1  < n3)
        alert("Número 1 menor = " + n1);
    else if(n2 < n1 && n2 < n3)
        alert("Número 2 menor = " + n2);
    else if(n3 < n1 && n3 < n2)
        alert("Número 3 menor = " + n3);
}