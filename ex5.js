function ex5(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let opc = Number(document.getElementById("opc").value);

    const c1 = (num1 + num2) / 2;
    const c3 = num1 * num2;
    const c4 = num1 / num2;

    switch(opc){
        case 1: alert("RESULTADO = " + c1)
            break;
        case 2: if(num1 > num2){
                    const c2 = num1 - num2;
                    alert("RESULTADO = " + c2);
        } else{
            const c2 = num2 = num1;
            alert("RESULTADO = " + c2);
        }
            break;
        case 3: alert("RESULTADO = " + c3);
            break;
        case 4: alert("RESULTADO = " + c4);
            break;
        default: alert("Opção inválida!");
            break;
    }
}